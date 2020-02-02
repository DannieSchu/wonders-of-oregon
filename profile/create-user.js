export default function createUser(formData) {
    const user = {
        name: formData.get('name'),
        experience: formData.get('boots-icon'),
        strength: {},
        energy: 100,
        completed: {},
    };

    return user;
}
