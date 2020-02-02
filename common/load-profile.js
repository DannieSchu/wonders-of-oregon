export default function loadProfile() { 
    // get elements from DOM
    const nameSpan = document.getElementById('name');
    const bootsIcon = document.getElementById('boots-icon');
    const strengthSpan = document.getElementById('strength');
    const energySpan = document.getElementById('energy');
    const completedTrailsSpan = document.getElementById('hiked');

    // initialize user using form data
    const json = localStorage.getItem('user');

    // if there's no user, return to homepage
    if (!json) {
        window.location('../profile/index.html');
    }
    const user = JSON.parse(json);

    if (user.experience === 'no-experience') {
        user.strength = 0;
    } else if (user.experience === 'moderate-experience') {
        user.strength = 10;
    } else if (user.experience === 'very-experienced') {
        user.strength = 20;
    }
    
    // set dom properties using form data
    nameSpan.textContent = user.name;
    bootsIcon.src = `../assets/boot-icons/${user.experience}.png`;
    strengthSpan.textContent = user.strength;
    energySpan.textContent = user.energy;
    completedTrailsSpan.textContent = user.hiked;
}
