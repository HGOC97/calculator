const buttons = document.querySelectorAll(".calc-button");
const display = document.querySelector("#result-paragraph");

console.log("Script loaded");

buttons.forEach(button => {
    button.addEventListener("click", function(clickTarget) {
        display.textContent += clickTarget.target.textContent;
    });
})

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