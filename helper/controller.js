import {getDOMElements,     clearResults,       addTradeShift,  applyLotteryBorder} from './DOM.js';
import {addLotteryTeams,    addNonLotteryTeams, applyChanges,   applySwaps,   getResultID}        from './draw.js';
import {draft_music,        post_draft_music}                                       from '../index.js';
import {revealPick,         revealResultID,     DELAY}                              from './reveal.js';

let controller;
let currentDraftData;

export async function handleDraft(year, currentRunID){
    if (controller) controller.abort();

    controller                                                  = new AbortController();
    const signal                                                = controller.signal;
    const {draftTeamArray, resultIDElement, actualIDElement}    = getDOMElements();
    
    const data          = await loadDraftData(year);
    currentDraftData    = data;

    clearResults        (draftTeamArray, resultIDElement,       actualIDElement, data.initialOrder);
    applyLotteryBorder  (draftTeamArray, data.lotteryTeams);

    const resultID = getResultID(data.lotteryOrder, data.initialOrder, data.lotteryTeams);
    const actualID = getResultID(data.actualOrder,  data.initialOrder, data.lotteryTeams);

    const finalDelay = runRevealSequence(
        data.lotteryOrder,
        data.lotteryTeams,
        currentRunID,
        draftTeamArray,
        signal,
        data.initialOrder
    );

    revealResultID(resultID, finalDelay, currentRunID, currentRunID, resultIDElement, signal, 'Result ID');
    revealResultID(actualID, finalDelay, currentRunID, currentRunID, actualIDElement, signal, 'Actual ID');

    setTimeout(() => {
        if (!signal.aborted) {
            finalizeDraft();
            const {skipButton} = getDOMElements();
            if (skipButton) skipButton.disabled = true;
        }
    }, finalDelay);
}

export function handleSkip() {
    if (!controller || !currentDraftData) return;
    
    controller.abort();

    const {draftTeamArray,  resultIDElement,    actualIDElement}                    = getDOMElements();
    const {lotteryOrder,    lotteryTeams,       actualOrder,        initialOrder}   = currentDraftData;

    lotteryOrder.forEach((team, index) => {
        const teamNameOnly  = team.split('▶')[0].trim();
        const originalIndex = initialOrder.indexOf(teamNameOnly);
        const shift         = originalIndex - index;

        let                 shiftSpan = '';
        if      (shift > 0) shiftSpan = `&nbsp;<span style="color: var(--rittu-green)">▲ ${shift}</span>`;
        else if (shift < 0) shiftSpan = `&nbsp;<span style="color: var(--rittu-red);">▼ ${Math.abs(shift)}</span>`;

        draftTeamArray[index].innerHTML         = `${team}${shiftSpan}`;
        draftTeamArray[index].style.color       = '';
        draftTeamArray[index].style.fontWeight  = 'bold';
        draftTeamArray[index].dataset.revealed  = "true";

        const tradeShiftItem = document.querySelector(`.trade-shift li[data-team="${teamNameOnly}"]`);
        if (tradeShiftItem) {
            if (team.includes('▶')) tradeShiftItem.classList.add('failed');
            else                    tradeShiftItem.classList.add('success');
        }
    });

    const resultID = getResultID(lotteryOrder,  initialOrder, lotteryTeams);
    const actualID = getResultID(actualOrder,   initialOrder, lotteryTeams);

    resultIDElement.textContent = `Result ID: ${resultID}`;
    actualIDElement.textContent = `Actual ID: ${actualID}`;

    finalizeDraft();
}

function finalizeDraft() {
    draft_music.pause();
    draft_music.currentTime = 0;
    post_draft_music.play().catch(e => console.error("Post-draft audio failed: ", e));
}

async function loadDraftData(year) {
    const {lotteryData, lotteryTeams}   = await import(`../year/${year}.js`);
    const initialOrder                  = lotteryData.map(team => team["pre-order-name"]);
    const initialChance                 = lotteryData.map(team => team["chance"]);
    const actualOrder                   = [...initialOrder];
    lotteryData.forEach(team => { actualOrder[team["actual-order"]] = team["pre-order-name"] });

    const swaps = lotteryData
        .filter (team => team["swap-with"])
        .map    (team => [team["pre-order-name"], team["swap-with"]]);

    const change = lotteryData
        .filter (team   => team["upper-limit"] !== undefined && !isNaN(team["upper-limit"]))
        .map    (team   => [
            team["pre-draft-order"], team["upper-limit"], team["lower-limit"],
            `${team["pre-order-name"]} ▶ ${team["alternative-name"]}`
        ])
        .sort   ((a, b) => a[0] - b[0]);

    let order                           = [...initialOrder];
    let chance                          = [...initialChance];
    let {lotteryOrder, remainingOrder}  = addLotteryTeams(order, chance, lotteryTeams);
    lotteryOrder                        = addNonLotteryTeams(lotteryOrder, remainingOrder);

    if (swaps.length > 0) applySwaps(lotteryOrder, swaps)
    applyChanges(lotteryOrder, initialOrder, change);
    addTradeShift(change, initialOrder, swaps);
    return {initialOrder, lotteryOrder, lotteryTeams, actualOrder};
}

function runRevealSequence(
    lotteryOrder, 
    lotteryTeamsCount, 
    currentRunID, 
    draftTeamArray, 
    signal, 
    initialOrder
){
    let delay       = 0;
    const mult3     = 1.040;
    const mult4     = 0.985;
    const delayMult = lotteryTeamsCount === 3 ? mult3 : mult4;

    for (let i = 0; i < lotteryOrder.length - lotteryTeamsCount; i++) {
        delay = revealPick(
            lotteryOrder.length - (i + 1), 
            lotteryOrder[lotteryOrder.length - (i + 1)], 
            delay + DELAY * delayMult, 
            currentRunID, 
            currentRunID, 
            draftTeamArray, 
            signal, 
            initialOrder
        );
    }

    for (let i = 0; i < lotteryTeamsCount - 2; i++) {
        delay = revealPick(
            lotteryTeamsCount - (i + 1), 
            lotteryOrder[lotteryOrder.length - (lotteryOrder.length - lotteryTeamsCount + i + 1)], 
            delay + DELAY * 2 * delayMult, 
            currentRunID, 
            currentRunID, 
            draftTeamArray, 
            signal, 
            initialOrder
        );
    }

    delay = revealPick(
        1, 
        lotteryOrder[1], 
        delay + DELAY * 4 * delayMult, 
        currentRunID, 
        currentRunID, 
        draftTeamArray, 
        signal, 
        initialOrder
    );

    delay = revealPick(
        0, 
        lotteryOrder[0], 
        delay + DELAY / 2 * delayMult, 
        currentRunID, 
        currentRunID, 
        draftTeamArray, 
        signal, 
        initialOrder
    );

    return delay;
}