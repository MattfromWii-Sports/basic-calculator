let preProcess = [];
let finalProcess = [];
const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');

numbers.forEach(number => number.addEventListener('click', numberFunction));
operators.forEach(operator => operator.addEventListener('click', operatorFunction));

function numberFunction() {
    preProcess.push(this.dataset.value);
    console.log(preProcess);
}
function operatorFunction() {
    if (preProcess.length !== 0) {
        finalProcess.push(parseInt(preProcess.join('')));
        preProcess = []; //Reset Array for next numbers
    }
    let isOperator = operatorCheck();
    if (isOperator === true) { 
        finalProcess = finalProcess.slice(0, -1);
        finalProcess.push(this.dataset.value);  
    } else {
        finalProcess.push(this.dataset.value);
    }
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