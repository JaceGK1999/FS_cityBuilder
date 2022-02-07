import { createStatsString } from './utils.js';

const climateSelect = document.getElementById('climate-select');
const climateImage = document.getElementById('climate-img');
const homeSelect = document.getElementById('home-select');
const homeImage = document.getElementById('home-img');
const areaSelect = document.getElementById('area-select');
const areaImage = document.getElementById('area-img');
const reportEl = document.getElementById('report');
const catchPhraseList = document.getElementById('catch-list');
const catchBtn = document.getElementById('catch-btn');
const catchPhraseInput = document.getElementById('catch-phrase-input');

let catchPhrases = [];
let climateCounter = 0;
let homeCounter = 0;
let areaCounter = 0;

climateSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    const image = `./assets/climate-${value}.jpg`;
    climateImage.src = image;
    climateCounter++;
    displayStats();
});

homeSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    const image = `./assets/home-${value}.jpg`;
    homeImage.src = image;
    homeCounter++;
    displayStats();
});

areaSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    const image = `./assets/area-${value}.jpg`;
    areaImage.src = image;
    areaCounter++;
    displayStats();
});

function displayStats() {
    const statsString = createStatsString(climateCounter, areaCounter, homeCounter);
    reportEl.textContent = statsString;
}

function displayCatchPhrases() {
    catchPhraseList.textContent = '';
    for (let catchPhrase of catchPhrases) {
        const p = document.createElement('p');
        p.textContent = catchPhrase;
        catchPhraseList.append(p);
    }
}

catchBtn.addEventListener('click', () => {
    catchPhrases.push(catchPhraseInput.value);
    displayCatchPhrases();
});

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

//reset button stuff
//   const reset = document.getElementById(reset)

// reset.addEventListener('click'), ( => {
//   slogans = []
//   sloganList.textContent = '';
// })

// //test stuff
// export function createCountString(climate, architecture, area) {
//}
