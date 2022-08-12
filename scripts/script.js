
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
                equationInput.classList.remove('answer')
                equationBox.style.setProperty('--off', 'none');
                resultInput.textContent = answer();
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    } else {
        for(const num of numbers){
            if (num == e.target.textContent.trim()){
                equationInput.textContent += num;
                equationInput.classList.remove('answer')
                equationBox.style.setProperty('--off', 'none');
                resultInput.textContent = answer();
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
    equationInput.classList.remove('answer')
    resultInput.textContent = '';
}

const deleteKey = document.querySelector('.del-key');
deleteKey.addEventListener('click', deleteNumber);

function deleteNumber(e){
    const inputLength = equationInput.textContent.length;
    if (inputLength == 1){
        equationInput.textContent = 0;
        equationInput.classList.remove('answer')
        resultInput.textContent = answer();
    } else if (equationInput.textContent[inputLength - 2] == ' '){
        equationInput.textContent = equationInput.textContent.slice(0, inputLength - 2);
        equationInput.classList.remove('answer')
        equationBox.style.setProperty('--off', 'none');
        resultInput.textContent = answer();
        setTimeout(onTextCursor, 500);
    } else {
        equationInput.textContent = equationInput.textContent.slice(0, inputLength - 1);
        equationInput.classList.remove('answer')
        equationBox.style.setProperty('--off', 'none');
        resultInput.textContent = answer();
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
        equationInput.textContent = '';
        for (const operator of operators){
            if (operator == e.target.textContent.trim()){
                equationInput.textContent += ` ${operator} `;
                equationInput.classList.remove('answer')
                equationBox.style.setProperty('--off', 'none');
                resultInput.textContent = answer();
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    } else {
        for (const operator of operators){
            if (operator == e.target.textContent.trim()){
                equationInput.textContent += ` ${operator} `;
                equationInput.classList.remove('answer')
                equationBox.style.setProperty('--off', 'none');
                resultInput.textContent = answer();
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    }
}

const charKeys = document.querySelectorAll('.char-key');
const characters = ['(', ')', '.'];

charKeys.forEach((charKey) => {
    charKey.addEventListener('click', inputChar);
})

function inputChar(e){
    if (equationInput.textContent == 0){
        equationInput.textContent = '';
        for (const character of characters){
            if (character == e.target.textContent.trim()){
                equationInput.textContent += `${character}`;
                equationInput.classList.remove('answer')
                equationBox.style.setProperty('--off', 'none');
                resultInput.textContent = answer();
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    } else {
        for (const character of characters){
            if (character == e.target.textContent.trim()){
                equationInput.textContent += `${character}`;
                equationInput.classList.remove('answer')
                equationBox.style.setProperty('--off', 'none');
                resultInput.textContent = answer();
                setTimeout(onTextCursor, 500);
            } else {
                continue;
            }
        }
    }
}

const answerKey = document.querySelector('.answer-key');

answerKey.addEventListener('click', displayAnswer);

function equation(){
    return equationInput.textContent;
}

function displayAnswer(e){
    if (equationInput.textContent == 0){
        equationInput.textContent = 0;
    } else if (equationInput.textContent.length < 5){
        return equation();
    } else {
        equationInput.textContent = answer();
        equationInput.classList.add('answer');
        resultInput.textContent = '';
    }
}

function answer(){
    let equation = equationInput.textContent.split(' ').map((number) => {
        if ((isNaN(+number) == true)){
          return number;
        } else {
          return +number;
        }
      });
    
    let operator = '';

    const finalAnswer = equation.reduce((totalValue, nxtValue) => {
        if (operator == ''){
            if (nxtValue == '+'){
                operator = nxtValue;
                return totalValue;
            } else if (nxtValue == '-'){
                operator = nxtValue;
                return totalValue;
            } else if (nxtValue == '*'){
                operator = nxtValue;
                return totalValue;
            } else if (nxtValue == '/'){
                operator = nxtValue;
                return totalValue;
            } 
        } else if (operator == '+'){
            operator = '';
            return totalValue += nxtValue;
        } else if (operator == '-'){
          operator = '';
          return totalValue -= nxtValue;
        } else if (operator == '*'){
          operator = '';
          return totalValue *= nxtValue;
        } else if (operator == '/'){
          operator = '';
          return totalValue /= nxtValue;
        }
    });

    return finalAnswer;
}

