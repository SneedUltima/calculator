// **** OPERATOR FUNCTIONS **** //

function add(value1, value2) {
    let answer = value1 + value2
    return answer
}

function subtract(value1, value2) {
    let answer = value1 - value2
    return answer
}

function multiply(value1, value2) {
    let answer = value1 * value2
    return answer
}

function divide(value1, value2) {
    let answer = value1 / value2
    return answer
}

function operate(operator, value1, value2) {
    let answer = operator(value1, value2)
    return answer
}

// **** DISPLAY FUNCTIONS **** //
// Initiliase display 
let displayValue = "";

// Values array

let operator = "";

let newNumber

let operand1 

let operand2

let zeroGone = false;



// DOM Elements
let display = document.querySelector(".display")
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")
const btn4 = document.querySelector("#btn-4")
const btn5 = document.querySelector("#btn-5")
const btn6 = document.querySelector("#btn-6")
const btn7 = document.querySelector("#btn-7")
const btn8 = document.querySelector("#btn-8")
const btn9 = document.querySelector("#btn-9")
const btn0 = document.querySelector("#btn-0")
const btnAdd = document.querySelector("#btn-add")
const btnSubtract = document.querySelector("#btn-subtract")
const btnMultiply = document.querySelector("#btn-multiply")
const btnDivide = document.querySelector("#btn-divide")
const btnEqual = document.querySelector("#btn-equal")
const btnClear = document.querySelector("#btn-clear")

// Function to clear display when number input
function removeZero() {
    if(display.textContent === "0") {
        displayValue = "";
    }
    if(operand1) {
        displayValue = "";
    }
    return;
}

// Number Event Listeners
btn1.addEventListener("click", () => {
    removeZero()
    displayValue += "1";
    display.textContent = displayValue;
   }
   )   

btn2.addEventListener("click", () => {
    removeZero()
    displayValue += "2";
    display.textContent = displayValue;
 })

btn3.addEventListener("click", () => {
    removeZero()
    displayValue += "3";
    display.textContent = displayValue;
 })

btn4.addEventListener("click", () => {
    removeZero()
    displayValue += "4";
    display.textContent = displayValue;
 })

btn5.addEventListener("click", () => {
    removeZero()
    displayValue += "5";
    display.textContent = displayValue;
 })

btn6.addEventListener("click", () => {
    removeZero()
    displayValue += "6";
    display.textContent = displayValue;
 })

btn7.addEventListener("click", () => {
    removeZero()
    displayValue += "7";
    display.textContent = displayValue;
 })

btn8.addEventListener("click", () => {
    removeZero()
    displayValue += "8";
    display.textContent = displayValue;
 })

btn9.addEventListener("click", () => {
    removeZero()
    displayValue += "9";
    display.textContent = displayValue;
 })

btn0.addEventListener("click", () => {
    displayValue += "0";
    display.textContent = displayValue;
 })

// Math Operator Event Listeners
btnAdd.addEventListener("click", () => {
    if(!operand1 && !operand2) {
        operator = add;
        operand1 = Number(displayValue)
        display.textContent = "0";
    }
    else if(operand1 && !operand2) {
        operand2 = Number(displayValue)
        display.textContent = "0";
    }
    else if(!operand1 && operand2 ) {
        operand1 = Number(displayValue) 
    }

    if(operand1 && operand2) {
        operator = add;
        operateValue = operate(operator, operand1, operand2);
        operand1 = operateValue
        operand2 = "";
        display.textContent = operand1;
    }
    
})

btnSubtract.addEventListener("click", () => {
    if(!operand1 && !operand2) {
        operator = subtract;
        operand1 = Number(displayValue)
        display.textContent = "0";
    }
    else if(operand1 && !operand2) {
        operand2 = Number(displayValue)
        display.textContent = "0";
    }
    else if(operand1 && !operand2 ) {
        operand1 = Number(displayValue) 
    }

    if(operand1 && operand2) {
        operator = subtract;
        operateValue = operate(operator, operand1, operand2);
        operand1 = operateValue
        operand2 = "";
        display.textContent = operand1;
    }
    
})

btnEqual.addEventListener("click", () => {
    if(!operand1) {
        operand1 = Number(displayValue)
    }
    operateValue = operate(operator, operand1, operand2);
    displayValue = operateValue
    display.textContent = displayValue;
})

// Display Event Listeners
btnClear.addEventListener("click", () => {
    operator = "";
    operand1 = "";
    operand2 = "";
    newNumber = "";
    displayValue = "0";
    pressed = false;
    display.textContent = displayValue;
})

