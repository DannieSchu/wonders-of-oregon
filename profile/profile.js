// Get user profile form

const userProfileForm = document.getElementById('user-profile');


// When the user submits form
userProfileForm.addEventListener('submit', (e) => {
    // Prevent default behavior
    e.preventDefault();
    // Make a new form data object
    const formData = new FormData(userProfileForm);
    // Make a user with the form data object
    const user = makeUser(formData);

    // Put the form data object into local storage
    saveUser(user);

    // Redirect user to map page
    window.location = './map/map.html';

});


const makeUser = (someFormData) => {
    
}