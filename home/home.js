import createUser from './create-user.js';

// Get user profile form
const userProfileForm = document.getElementById('user-profile');

// When the user submits form
userProfileForm.addEventListener('submit', (e) => {
    // Prevent default behavior
    e.preventDefault();
    // Make a new form data object
    const formData = new FormData(userProfileForm);

    // Create a user with the form data object
    const userProfile = createUser(formData);

    // Put the form data object into local storage
    localStorage.setItem('user', JSON.stringify(userProfile));

    // Redirect user to map page
    window.location = '../map/index.html';
});
