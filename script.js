let numberPreprocess = [];
let numberFinalProcess = [];
let operatorFinal = [];
const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');

numbers.forEach(number => number.addEventListener('click', function() {
    numberPreprocess.push(parseInt(this.dataset.value));
}));
operators.forEach(operator => operator.addEventListener('click', function() {
    operatorFinal.push(this.dataset.value);
    numberFinalProcess.push(parseInt(numberPreprocess.join('')));
    numberPreprocess = []; //Reset Preprocess Array for next numbers
}));

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