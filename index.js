import {handleDraft,    handleSkip} from './helper/controller.js';
import {getDOMElements}             from './helper/DOM.js';

let currentRunID        = 0;
const START_YEAR        = 2006;
const END_YEAR          = 2026;
const SUPPORTED_YEARS   = Array.from({length: END_YEAR - START_YEAR + 1}, (_, i) => START_YEAR + i).reverse();

export const draft_music        = new Audio('./helper/music/draft.mp3');
export const post_draft_music   = new Audio('./helper/music/post-draft.mp3');

draft_music         .volume = 0.5;
post_draft_music    .volume = 0.5;

async function initializeYearDropdown(yearSelect) {
    for (const year of SUPPORTED_YEARS) {
        try {
            await import(`./year/${year}.js`);
            const option        = document.createElement('option');
            option.value        = year;
            option.textContent  = year;
            yearSelect.appendChild(option);
        } catch (e) {console.warn(`year/${year}.js not found`)}
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const {yearSelect, startButton, skipButton} = getDOMElements();
    await initializeYearDropdown(yearSelect);

    startButton.addEventListener('click', () => {
        const selectedYear = yearSelect.value;
        if (selectedYear) {
            post_draft_music.pause();
            draft_music         .currentTime = 0.5;
            post_draft_music    .currentTime = 0;
            draft_music.play().catch(error => {console.error("Audio playback failed: ", error)});
            if (skipButton) skipButton.disabled = false;
            handleDraft(selectedYear, currentRunID);
            currentRunID++;
        }
    });

    if (skipButton) {
        skipButton.addEventListener('click', () => {
            skipButton.disabled = true;
            handleSkip();
        });
    }
});