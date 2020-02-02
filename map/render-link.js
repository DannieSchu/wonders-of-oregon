// import trailsArray from "../data/trailsAPI";

export default function renderTrailLink(trailsArray) {    
    // get user from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    
    // create links in the DOM
    const trailLink = document.createElement('a');

    // add classList of 'trail'
    trailLink.classList.add = 'trail';

    // add textContent to element
    trailLink.textContent = trailLink.name;
    
    // for each item in the trails array
    trailsArray.forEach(trail => {
        // if user has completed hike
        if (user.hiked[trail.id]) {
            trailLink.style.textDecoration = 'line-through';
        } else {
        // add href using query params
            const searchParams = new URLSearchParams();
            searchParams.set('id', trail.id);
            trailLink.href = 'trail?' + searchParams.toString();
        }
        // set location of link to location in object
        trailLink.style.top = trail.map.top;
        trailLink.style.left = trail.map.left;
    });

    return trailLink;
    
}
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