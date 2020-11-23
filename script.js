const buttons = document.querySelectorAll(".calc-button");
const display = document.querySelector("#result-paragraph");
const clearDisplayButton = document.querySelector("#clear-button");
const undoButton = document.querySelector("#undo-button");
const numberButtons = document.querySelectorAll(".calc-num");
const operButtons = document.querySelectorAll(".calc-oper");
let evaluation = [];
let tempOperand = "";

// When a button is clicked, add it to the display
buttons.forEach(button => {
    button.addEventListener("click", function(clickTarget) {
        if (clickTarget.target.id != "clear-button" && clickTarget.target.id != "undo-button") {
            display.textContent += clickTarget.target.textContent;
        }
        if (Array.from(clickTarget.target.classList).includes("calc-num")) {
            tempOperand = tempOperand.concat(clickTarget.target.textContent);
        } else if (Array.from(clickTarget.target.classList).includes("calc-oper") && tempOperand != "") {
            evaluation.push(tempOperand);
            tempOperand = "";
            evaluation.push(clickTarget.target.textContent);
            console.log(evaluation);
        }
    });
})

// Clear the display when "C" buttons is clicked
clearDisplayButton.addEventListener("click", function(clickTarget) {
    display.textContent = "";
});

/// Remove the last character from the display string
undoButton.addEventListener("click", function(clickTarget) {
    display.textContent = display.textContent.slice(0, -1);
});

// numberButtons.addEventListener("click", function(clickTarget) {
//     tempButton = tempButton + clickTarget.textContent;
// });

// operButtons.addEventListener("click", function(clickTarget) {
//     evaluation.push(tempOperand);
//     tempOperand = "";
//     evaluation.push(clickTarget.textContent);
//     console.log(evaluation);
// });

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(operator, number1, number2) {
    let result;
    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
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