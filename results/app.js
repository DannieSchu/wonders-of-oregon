import loadProfile from '../common/load-profile.js';
import { resultsArray } from './resultsAPI.js';
import findById from '../common/find-by-id.js';

// get user from localStorage
const json = localStorage.getItem('user');
const user = JSON.parse(json);

// display user profile
loadProfile();

// get elements from DOM
const restartButton = document.getElementById('restart-button');
const resultsSubheading = document.getElementById('results-subheading');
const resultsP = document.getElementById('results-paragraph');

let resultId;

// determine result based on quiz performance
if (user.energy <= 0) {
    resultId = 'depleted';
} else if (user.strength <= user.energy) {
    resultId = 'tired';
} else if (user.strength > user.energy) {
    resultId = 'energized';
}

console.log(user.strength);

// find result by matching id to resultsArray item
const result = findById(resultsArray, resultId);

// add results to DOM
resultsSubheading.textContent = result.heading;
resultsP.textContent = result.description;

restartButton.addEventListener('click', () => {
    // clear localStorage for user
    localStorage.clear(user);
    window.location = '../home/index.html';
});