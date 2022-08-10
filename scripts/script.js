
const equationBox = document.querySelector('.upper-input');
const equationInput = document.querySelector('.upper-input > span');
const resultInput = document.querySelector('.lower-input > span');

equationInput.textContent = 0;

const textCursor = window.getComputedStyle(equationInput, '::after');

const numKeys = document.querySelectorAll('.num-key');
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numKeys.forEach((numKey) => {
    numKey.addEventListener('click', inputNumber);
});

function inputNumber(e){
    if (equationInput.textContent == 0){
        equationInput.textContent = '';
        for(const num of numbers){
            if (num == e.target.textContent.trim()){
                equationInput.textContent += num;
                equationBox.style.setProperty('--off', 'none');
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    } else {
        for(const num of numbers){
            if (num == e.target.textContent.trim()){
                equationInput.textContent += num;
                equationBox.style.setProperty('--off', 'none');
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    }
}

function onTextCursor (){
    return equationBox.style.setProperty('--off', 'on-text-cursor ease-in-out 1s infinite');
}


const clearKey = document.querySelector('.clear-key');
clearKey.addEventListener('click', clearInput);

function clearInput(e){
    equationInput.textContent = 0;
    resultInput.textContent = '';
}

const deleteKey = document.querySelector('.del-key');
deleteKey.addEventListener('click', deleteNumber);

function deleteNumber(e){
    const inputLength = equationInput.textContent.length;
    if (inputLength == 1){
        equationInput.textContent = 0;
    } else {
        equationInput.textContent = equationInput.textContent.slice(0, inputLength - 1);
        equationBox.style.setProperty('--off', 'none');
        setTimeout(onTextCursor, 500);
    }
}


const operKeys = document.querySelectorAll('.oper-key');
const operators = ['+', '-', '*', '/'];

operKeys.forEach((operKey) => {
    operKey.addEventListener('click', inputOperator);
})

function inputOperator (e){
    if (equationInput.textContent == 0){
        equationInput.textContent = 0;
    } else {
        for (const operator of operators){
            if (operator == e.target.textContent.trim()){
                equationInput.textContent += ` ${operator} `;
                equationBox.style.setProperty('--off', 'none');
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    }
}