import renderTrailLink from './render-link.js';
import findById from '../common/find-by-id.js';
import loadProfile from '../common/load-profile.js';

loadProfile();

// check local storage to see what questions have been completed
const trailsArray = localStorage.getItem(JSON.parse('trails'));

const possiblyCompletedTrail = findById(trailsArray, selectedTrail.id);

let remainingTrail;

// if there are no questions left to answer
if (remainingTrail === 0) {
    // redirect to the results page
    window.location('../results/index.html');
// otherwise, loop through each trail in the array and render 
} else {
    trailsArray.forEach(trail => {
        renderTrailLink(trail);
    });
}

while (possiblyCompletedTrail) {
 // change position? strikethrough?
}

// if there are any questions left to answer
    // render a list of remaining questions based on the metadata
        // get the ul from the DOM
        // get questions from metadata
        // loop through questions
            // get a question from the array
            // make an li for the question
                // create li
                // make an <a> for li
                // unles the question is already completed (check local storage). If so, make a span.
                // add textContent and and href to the a tag (using query params)
                    //e.g. href="./detail?id=snake"
            // append the a tag to the li
            // append the question li to the ul
