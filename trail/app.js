import loadProfile from '../common/load-profile.js';
import trailsArray from '../data/trailsAPI.js';
import findById from '../common/find-by-id.js';
import renderOption from './render-option.js';

loadProfile();

// get the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);

// get the trail id from the URL
const trailId = searchParams.get('id');

// find the trail by matching trail id from search params to trails array
const trail = findById(trailsArray, trailId);

// const trailOverview = document.getElementById('trail-overview');

// get DOM
const trailName = document.getElementById('trail-name');
const trailDescription = document.getElementById('trail-description');
const trailImage = document.getElementById('trail-image');

const trailQuizForm = document.getElementById('trail-quiz');
const quizQuestion = document.getElementById('quiz-question');
const resultSection = document.getElementById('result-section');
const returnButton = document.getElementById('return-button');
const choiceText = document.getElementById('user-choice');
const outcomeText = document.getElementById('outcome');
const options = document.getElementById('options');


// render trail information to dom
trailName.textContent = trail.name;
trailImage.src = `../assets/trails/${trail.image}`;
trailDescription.textContent = trail.description;
quizQuestion.textContent = trail.question;

// for each quiz choice, render option description/radio button
trail.options.forEach(option => {
    const optionDOM = renderOption(option);
    options.appendChild(optionDOM);
});

// add an event listener on submit of form
trailQuizForm.addEventListener('submit', e => {
    e.preventDefault();
    
    // get user choice from form data
    const formData = new FormData(trailQuizForm);
    const optionId = formData.get('option');
    const userChoice = findById(trail.options, optionId);
    
    // get user out of local storage
    const user = JSON.parse(localStorage.getItem('user'));
    // generate score
    user.strength += userChoice.strength;
    user.energy += userChoice.energy;
    user.hiked[trailId] = true;

    // if (userChoice.energy >= 0) {
    //     user.strength += userChoice.strength;
    // } else {
    //     user.strength -= userChoice.strength;
    // }

    // save user updates in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // update DOM with results
    // trailQuizForm.classList.add('hidden');
    trailQuizForm.style.display = 'none';
    // returnButton.classList.remove('hidden');
    // returnButton.style.display = 'block';
    // resultSection.classList.remove('hidden');
    resultSection.style.display = 'flex';
    
    // render result information to dom
    choiceText.textContent = userChoice.option;
    outcomeText.textContent = userChoice.outcome;
    
    // return to map
    returnButton.addEventListener('click', () => {
        window.location = '../map/index.html';
    });

    loadProfile();
}
);

