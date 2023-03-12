const sendName = () =>{
    const nameField = document.getElementById('name-field');
    const name = nameField.value;
    localStorage.setItem('name', name);
    nameField.value = '';
}

const deleteName = () =>{
    localStorage.removeItem('name');
}

const sendEmail = () => {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    localStorage.setItem('email', email);
    emailField.value = '';
}

const deleteEmail = () => {
    localStorage.removeItem('email');
}

const sendMessage = () => {
    const textField = document.getElementById('text-field');
    const text = textField.value;
    localStorage.setItem('Message', text);
    textField.value = '';
}

const deleteMessage = () => {
    localStorage.removeItem('Message');
}

const resetAll = () => {
    localStorage.clear()
}