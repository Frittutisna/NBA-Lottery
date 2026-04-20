export const getDOMElements = () => {
    return {
        yearSelect      : document      .getElementById     ('year-select'),
        startButton     : document      .getElementById     ('start-button'),
        skipButton      : document      .getElementById     ('skip-button'),
        draftTeamArray  : [...document  .querySelectorAll   ('.draft-team')],
        resultIDElement : document      .querySelector      ('.result-ID'),
        actualIDElement : document      .querySelector      ('.actual-ID'),
    };
};

export const clearResults = (draftTeamArray, resultIDElement, actualIDElement, initialOrder = []) => {
    draftTeamArray.forEach((el, index) => {
        el.textContent      = initialOrder[index] || ''; 
        el.style.color      = 'gray';
        el.style.fontWeight = 'normal';
        delete el.dataset.revealed;
    });

    resultIDElement.textContent = '';
    actualIDElement.textContent = '';

    const tradeShiftItems = document.querySelectorAll('.trade-shift li');
    tradeShiftItems.forEach(item => {if (!item.textContent.includes('higher')) {item.classList.remove('success', 'failed')}});
};

export const addTradeShift = (change, order, swaps = []) => {
    const tradeShiftList = document.querySelector('.trade-shift ul');
    tradeShiftList.innerHTML = '';

    change.forEach(([index, lowerLimit, upperLimit, newOwner]) => {
        const originalTeam      = order[index];
        const newTeam           = newOwner.split('▶').pop();
        const listItem          = document.createElement('li');
        listItem.dataset.team   = originalTeam; 
        const range             = lowerLimit === upperLimit ? `#${lowerLimit + 1}` : `#${lowerLimit + 1}-${upperLimit + 1}`;
        listItem.innerHTML      = `<strong>${originalTeam}</strong> retains pick if ${range}<br>Otherwise, pick conveys to <strong>${newTeam}</strong>`;
        tradeShiftList.appendChild(listItem);
    });

    swaps.forEach(([teamA, teamB]) => {
        const listItem          = document.createElement('li');
        listItem.dataset.team   = teamA; 
        listItem.classList.add('success'); 
        listItem.innerHTML      = `<strong>${teamA}</strong> retains the higher pick<br>between itself and <strong>${teamB}</strong>`;
        tradeShiftList.appendChild(listItem);
    });
};

export const applyLotteryBorder = (draftTeamArray, lotteryTeamsCount) => {
    draftTeamArray.forEach(el => el.parentElement.classList.remove('lottery-separator'));
    draftTeamArray[lotteryTeamsCount - 1].parentElement.classList.add('lottery-separator');
};