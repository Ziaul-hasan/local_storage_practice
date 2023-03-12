let countField = document.getElementById('count');
let countString = countField.innerText;
let count = parseInt(countString);
localStorage.setItem('number', count);
let storedNumber = localStorage.getItem('number');
count = parseInt(storedNumber);

const countNumber = () => {
    count += 1;
    displayCount();
    saveNumberToLoacalStorage();
}

const displayCount = () => {
    countField.innerText = getNumberFromLocalStorage();
}

const getNumberFromLocalStorage = () => {
    let number = 0;
    const storedNumber = localStorage.getItem('number');
    if(storedNumber){
        number= parseInt(storedNumber);
    }
    return number;
}

const saveNumberToLoacalStorage = () =>{
    const number = getNumberFromLocalStorage();
    localStorage.setItem('number', count);
}

displayCount();