const display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.textContent.trim();

        // Numbers and decimal
        if (!isNaN(value) || value === ".") {

            if (operator === "") {
                firstNumber += value;
                display.value = firstNumber;
            } else {
                secondNumber += value;
                display.value = secondNumber;
            }
        }

        // Operators
        else if (
            value === "+" ||
            value === "−" ||
            value === "×" ||
            value === "÷"
        ) {

            if (firstNumber !== "") {
                operator = value;
                display.value = operator;
            }
        }

        // Equals
        else if (value === "=") {

            if (firstNumber !== "" && secondNumber !== "") {

                let num1 = parseFloat(firstNumber);
                let num2 = parseFloat(secondNumber);
                let answer;

                if (operator === "+") {
                    answer = num1 + num2;
                }
                else if (operator === "−") {
                    answer = num1 - num2;
                }
                else if (operator === "×") {
                    answer = num1 * num2;
                }
                else if (operator === "÷") {

                    if (num2 === 0) {
                        display.value = "Error";
                        return;
                    }

                    answer = num1 / num2;
                }

                display.value = answer;

                firstNumber = answer.toString();
                secondNumber = "";
                operator = "";
            }
        }

        // Clear
        else if (value === "C") {

            firstNumber = "";
            secondNumber = "";
            operator = "";

            display.value = "0";
        }

        // Backspace
        else if (value === "⌫") {

            if (operator === "") {
                firstNumber = firstNumber.slice(0, -1);
                display.value = firstNumber || "0";
            }
            else {
                secondNumber = secondNumber.slice(0, -1);
                display.value = secondNumber || "0";
            }
        }

    });

});