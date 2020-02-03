export default function renderOption(option) {
    // make label
    const label = document.createElement('label');
    
    // make span describing option
    // const span = document.createElement('span');
    label.textContent = option.option;
    
    // make radio button input
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'option';
    radioButton.value = option.id;
    
    label.appendChild(radioButton);
    // label.appendChild(span);

    return label;
}