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
let displayValue = 0;

// Values array

let operator = "";

let operand1 = "";

let operand2 = "";

let pressed = false;


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
    // pressed = true;
    // addValue = Number(displayValue)
    // values.push(`${addValue}`)
    // if (values.length >= 2) {
    //     const valuesNums = values.map(str => {
    //         return Number(str);
    //       });
    //     operateValue = operate(operator, valuesNums);
    //     displayValue = operateValue
    //     display.textContent = displayValue;
    // }
    // else {
    // operator = add;
    // displayValue = "0";
    // display.textContent = displayValue;
    // }
    if (pressed === false)
    {
        operand1 = Number(displayValue)
        pressed = true
        operator = add;
        displayValue = "0";
        display.textContent = displayValue;
    }
    else {
        operand2 = Number(displayValue)
        operateValue = operate(operator, operand1, operand2);
        displayValue = operateValue
        display.textContent = displayValue;
    }
    
})

btnSubtract.addEventListener("click", () => {
    addValue = Number(displayValue)
    values.push(`${addValue}`)
    if (values.length >= 2) {
        const valuesNums = values.map(str => {
            return Number(str);
          });
        operateValue = operate(operator, valuesNums);
        displayValue = operateValue
        display.textContent = displayValue;
    }
    else {
    operator = subtract;
    // displayValue = "0";
    display.textContent = displayValue;
    }
})

btnEqual.addEventListener("click", () => {
    operand2 = Number(displayValue)
    operateValue = operate(operator, operand1, operand2);
    displayValue = operateValue
    display.textContent = displayValue;
})

// Display Event Listeners
btnClear.addEventListener("click", () => {
    operator = "";
    operand1 = ""
    operand2 = ""
    displayValue = "0"
    display.textContent = displayValue;
})

