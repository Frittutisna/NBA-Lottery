const DELAY_MILISECOND = 4000;

const setRevealTimeout = (delay, callback, signal) => {
    const timeoutId = setTimeout(() => {if (!signal.aborted) callback()}, delay);
    signal.addEventListener('abort', () => clearTimeout(timeoutId));
};

export const revealPick = (index, team, delay, runID, currentRunID, draftTeamArray, signal, initialOrder) => {
    if (runID === currentRunID) {
        setRevealTimeout(delay, () => {
            const lotteryBoundary = draftTeamArray.findIndex(
                item => item.parentElement.classList.contains('lottery-separator')
            ) + 1;

            const teamNameOnly  = team.split('→')[0];
            const originalIndex = initialOrder.indexOf(teamNameOnly);
            const shift         = originalIndex - index;

            let                 shiftSpan = '';
            if      (shift > 0) shiftSpan = `&nbsp;<span style="color: var(--rittu-green)">↑ ${shift}</span>`;
            else if (shift < 0) shiftSpan = `&nbsp;<span style="color: var(--rittu-red);">↓ ${Math.abs(shift)}</span>`;

            draftTeamArray[index].innerHTML = `${team}${shiftSpan}`;
            draftTeamArray[index].style.color       = '';
            draftTeamArray[index].style.fontWeight  = 'bold';
            draftTeamArray[index].dataset.revealed  = "true";

            const tradeShiftItem = document.querySelector(`.trade-shift li[data-team="${teamNameOnly}"]`);
            if (tradeShiftItem) {
                if (team.includes('→')) tradeShiftItem.classList.add('failed');
                else                    tradeShiftItem.classList.add('success');
            }

            const revealedTeams = draftTeamArray
                .filter (el => el.dataset.revealed === "true")
                .map    (el => el.textContent.split('→')[0].split(' ↑')[0].split(' ↓')[0].trim());

            let remainingPool = [...initialOrder];
            revealedTeams.forEach(t => {
                const lastIdx = remainingPool.lastIndexOf(t);
                if (lastIdx !== -1) remainingPool.splice(lastIdx, 1);
            });

            const jumpers = [];
            for (let i = initialOrder.length - 1; i >= lotteryBoundary; i--) {
                const expectedTeam = initialOrder[i];
                if (
                    i >= index                              && 
                    !revealedTeams  .includes(expectedTeam) && 
                    !jumpers        .includes(expectedTeam)
                ) jumpers.unshift(expectedTeam);
            }

            const nonJumpers        = remainingPool .filter(t           => !jumpers.includes(t));
            const lotteryNonJumpers = nonJumpers    .filter((_, idx)    => idx <    (lotteryBoundary - jumpers.length));
            const otherNonJumpers   = nonJumpers    .filter((_, idx)    => idx >=   (lotteryBoundary - jumpers.length));
            const placeholderList   = [...lotteryNonJumpers, ...jumpers, ...otherNonJumpers];
            let placeholderPointer  = 0;

            for (let i = 0; i < draftTeamArray.length; i++) {
                const el = draftTeamArray[i];
                if (el.dataset.revealed !== "true") {
                    const teamInPlaceholder = placeholderList[placeholderPointer] || "";
                    el.textContent          = teamInPlaceholder;
                    el.style.fontWeight     = 'normal';
                    
                    if (jumpers.includes(teamInPlaceholder))    el.style.color = 'var(--rittu-green)';
                    else                                        el.style.color = 'gray';

                    const tradeShiftItem = document.querySelector(`.trade-shift li[data-team="${teamInPlaceholder}"]`);
                    if (tradeShiftItem && jumpers.includes(teamInPlaceholder)) tradeShiftItem.classList.add('success')

                    placeholderPointer++;
                }
            }
        }, signal);
    }
    return delay;
};

export const revealPickInstant = (data, draftTeamArray, resultIDElement, actualIDElement, initialOrder) => {
    data.lotteryOrder.forEach((team, index) => {
        draftTeamArray[index].textContent       = team;
        draftTeamArray[index].style.color       = '';
        draftTeamArray[index].style.fontWeight  = 'bold';
        draftTeamArray[index].dataset.revealed  = "true";

        const teamNameOnly      = team.split('→')[0];
        const tradeShiftItem    = document.querySelector(`.trade-shift li[data-team="${teamNameOnly}"]`);
        if (tradeShiftItem) {
            if (team.includes('→')) tradeShiftItem.classList.add('failed');
            else                    tradeShiftItem.classList.add('success');
        }
    });

    const resultID = getResultID(data.lotteryOrder, initialOrder, data.lotteryTeams);
    const actualID = getResultID(data.actualOrder,  initialOrder, data.lotteryTeams);
    
    resultIDElement.textContent = `Result ID: ${resultID || "TBD"}`;
    actualIDElement.textContent = `Actual ID: ${actualID || "TBD"}`;
};

export const revealResultID = (resultID, delay, runID, currentRunID, 
resultIDElement, signal, label = 'Result ID') => {
    if (resultID    === 0)              resultID = "TBD";
    if (runID       === currentRunID)   setRevealTimeout(delay, () => {resultIDElement.textContent = `${label}: ${resultID}`}, signal);
};

export const DELAY = DELAY_MILISECOND;