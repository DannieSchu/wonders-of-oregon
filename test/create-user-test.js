import createUser from '../profile/create-user.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData;
    formData.set('name', 'Dannie');
    formData.set('experience', 'moderate-experience');
    

    const expected = {
        name: 'Dannie',
        experience: 'moderate-experience',
        strength: {},
        energy: 100,
        completed: {},
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const user = createUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(user, expected);
});