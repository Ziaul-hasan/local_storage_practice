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


const getStoredFromLocalStorage = () => {
    const object = {};
    const storedObject = localStorage.getItem('object');
    if(storedObject){
        object = JSON.parse(storedObject);
    }
    return object;
}

const sendAll = () => {
    const object = getStoredFromLocalStorage();
    
    const userName = document.getElementById('name').innerText;
    const inputName = document.getElementById('name-field');
    const objectValue = inputName.value;
    inputName.value = '';
    object[userName] = `${objectValue}`;
    
    const userEmail = document.getElementById('email').innerText;
    const inputEmail = document.getElementById('email-field');
    const objectAddress = inputEmail.value;
    inputEmail.value = '';
    object[userEmail] = `${objectAddress}`;
    
    const userText = document.getElementById('text').innerText;
    const inputText = document.getElementById('text-field');
    const objectMessage = inputText.value;
    inputText.value = '';
    object[userText] = `${objectMessage}`;
    
    const objectStringified = JSON.stringify(object);
    localStorage.setItem('object', objectStringified);
}

const resetAll = () => {
    localStorage.clear()
}