// import renderTrailLink from './render-link.js';
// import findById from '../common/find-by-id.js';
import loadProfile from '../common/load-profile.js';
import trailsArray from '../data/trailsAPI.js';

loadProfile();

// get nav element from DOM
const trailsNav = document.getElementById('trails-nav');

function renderTrailLink() {    
    // get user from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    
    // for each item in the trails array
    trailsArray.forEach(trail => {
        // create links in the DOM
        const trailLink = document.createElement('a');
    
        // add classList of 'trail'
        trailLink.classList.add = 'trail';

        // add textContent to element
        trailLink.textContent = trail.name;

        // if user has completed hike
        if (user.hiked[trail.id]) {
            trailLink.style.textDecoration = 'line-through';
        } else {
            // add href using query params
            const searchParams = new URLSearchParams();
            searchParams.set('id', trail.id);
            trailLink.href = 'trail?' + searchParams.toString();

            // set location of link to location in object
            trailLink.style.top = trail.map.top;
            trailLink.style.left = trail.map.left;
        }
        // append link to nav element
        trailsNav.appendChild(trailLink);
    });
}

renderTrailLink(trailsArray);