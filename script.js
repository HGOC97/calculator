const numberButtons = document.querySelectorAll(".calc-num");
const operButtons = document.querySelectorAll(".calc-oper");
const clearButton = document.querySelector("#clear-button");
const resultDisplay = document.querySelector("#result-paragraph");
const equalButton = document.querySelector("#equals-button");

let operator = "";
let tempOperand = "";
let firstOperand = "";
let secondOperand = "";

numberButtons.forEach(button => {
    button.addEventListener("click", function(clickTarget) {
        // If the operation wasn't selected
        let arrayOperand = Array.from(tempOperand);
        // If no floating point in operand
        if (!arrayOperand.includes(".")) {
            tempOperand += clickTarget.target.textContent;
            resultDisplay.textContent = tempOperand;
            if (firstOperand != "" && operator != "" && secondOperand === "") {
                resultDisplay.textContent = `${firstOperand}${operator}${tempOperand}`
            }
            // If there is a floating point
        } else {
            if (clickTarget.target.textContent != ".") {
                tempOperand += clickTarget.target.textContent;
                resultDisplay.textContent = tempOperand;
            }
        }
    });
});

// When an operation button is pressed, assign it as an operation for the coming calc
operButtons.forEach(button => {
    button.addEventListener("click", function(clickTarget) {
        // If tempOperand has a value (meaning calc isn't empty)
        if (tempOperand != "") {
            // If there is no firstOperand
            if (firstOperand == "") {
                firstOperand = tempOperand;
            // If there is no secondOperand
            } else {
                secondOperand = tempOperand;
            }
            tempOperand = "";
            // If there are values for both firstOperand and secondOperand then calculate
            if (firstOperand != "" && secondOperand != "") {
                let result = operate(operator, firstOperand, secondOperand);
                firstOperand = result;
                secondOperand = "";
            }
            // Set the next operator
            operator = clickTarget.target.textContent;
            resultDisplay.textContent += operator;
            console.log(`firstOperand is ${firstOperand} secondOperand is ${secondOperand}`);
        }
    });
});

// Reset all values when clear button is clicked
clearButton.addEventListener("click", function(clickTarget) {
    operator = "";
    tempOperand = "";
    firstOperand = "";
    secondOperand = "";
    resultDisplay.textContent = "";
});

equalButton.addEventListener("click", function(clickTarget) {
    if (firstOperand != "" && tempOperand != "" && operator != "") {
        let result = operate(operator, firstOperand, tempOperand);
        firstOperand = result;
        resultDisplay.textContent = firstOperand;
        secondOperand = "";
    }
});

// Operations //

function add(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}

function subtract(number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}

function multiply(number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}

function divide(number1, number2) {
    return parseFloat(number1) / parseFloat(number2);
}

// Perform the appropriate operation
function operate(operator, number1, number2) {
    let result;
    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "X":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        default:
            break;
    }
    return result;
}