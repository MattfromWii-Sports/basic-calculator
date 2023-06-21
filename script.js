let preProcess = [];
let finalProcess = [];
const currentDisplay = document.getElementById('current-display');
const lastDisplay = document.getElementById('last-display');
const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');

numbers.forEach(number => number.addEventListener('click', numberFunction));
operators.forEach(operator => operator.addEventListener('click', operatorFunction));

function numberFunction() {
    if (preProcess.some(item => item === '.') && this.dataset.value === '.') { 
        return //Avoid multiple '.' after one is in the array
    }
    preProcess.push(this.dataset.value);
    currentDisplay.textContent = `${finalProcess.join(' ')} ${preProcess.join('')}`;
}
function operatorFunction() {
    if (preProcess.length !== 0) {
        if (preProcess[0] === '.') { //Checks if '.' is the first item in the array, shifts the array by adding 0 to the start 
            preProcess.unshift('0');
        }
        finalProcess.push(preProcess.join(''));
        preProcess = [];
    }
    if (finalProcess.length == 0) { 
        return; //Check array to avoid making operators the first item
    }
    let isOperator = operatorCheck();
    if (isOperator === true) { //Removes last array item if it is an operator
        finalProcess = finalProcess.slice(0, -1);
    }
    finalProcess.push(this.dataset.value);
    currentDisplay.textContent = `${finalProcess.join(' ')}`;
    console.log(finalProcess);
}

//Operator Check
function operatorCheck() {
    switch (finalProcess[finalProcess.length - 1]) {
        case '%':
        case 'x':
        case '-':
        case '+':
            return true
    }
}

//Basic Math operators
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}