// Get user profile form
const userProfileForm = document.getElementById('user-profile');


// When the user submits form
userProfileForm.addEventListener('submit', (e) => {
    // Prevent default behavior
    e.preventDefault();
    // Make a new form data object
    const formData = new FormData(userProfileForm);
    // Create a user with the form data object
    const createUser = () => {
        const user = {
            name: formData.get('name'),
            experience: formData.get('experience'),
            strength: {},
            energy: 100,
            completed: {},
        };

        if (user.experience.value === 'no-experience') {
            user.strength = 0;
        }
        if (user.experience.value === 'moderate-experience') {
            user.strength = 10;
        }
        if (user.experience.value === 'very-experienced') {
            user.strength = 20;
        }
        console.log(user.experience.value);

        return user;
    };
    const userProfile = createUser(formData);

    // Put the form data object into local storage
    localStorage.setItem('user', JSON.stringify(userProfile));

    // Redirect user to map page
    window.location = '../map/index.html';

});
