// ***************************
// VARIABLE DECLARATIONS
// ***************************

let array = [];
let ac = document.querySelector('.ac');
let calculation = document.querySelector('.calculation');
let answer = document.querySelector('.answer');
let numbers2 = document.getElementsByClassName('number');
let buttons = document.querySelector('.buttons');
let equal = document.querySelector('.equals');
let del = document.querySelector('.delete');

let num2Del = false;
let num1 = "";
let num2 = "";
let expression = "";

// ***************************
// Setting Up Calculator
// ***************************

const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operation'));
numbers.forEach(number => number.addEventListener('click', numberInsert));
operators.forEach(operator => operator.addEventListener('click', operatorInsert));

// ***************************
// Button Event Listeners
// ***************************

function numberInsert(e) { // Numbers and +/-
    num2Del = false;
    if (expression === "") {
        if (e.target.innerText === "." && ((typeof num1 == "string" && num1.includes(".")) || (num1.toString().includes(".")))) {
            return;
        }
        if (e.target.innerText === "+/-") {
            if (num1 === "") {
                answer.innerText = "-";
                calculation.innerText = "-";
                num1 = "-";
                return;
            }
            num1 /= -1;
            num1 = num1.toString();
            answer.innerText = num1;
            return;
        }
        answer.innerText += e.target.innerText;
        calculation.innerText += e.target.innerText;
        num1 += e.target.innerText;
    } else {
        if (e.target.innerText === "+/-") {
            if (num2 === "") {
                answer.innerText = "-";
                calculation.innerText += "    -";
                num2 = "-";
                return;
            }
            num2 /= -1;
            num2 = num2.toString();
            answer.innerText = num2;
            return;
        }
        if (num2 === "") {
            answer.innerText = e.target.innerText;
            calculation.innerText += "    " + e.target.innerText;
            num2 += e.target.innerText;
            return;
        }
        if (e.target.innerText === "." && ((typeof num2 == "string" && num2.includes(".")) || (num2.toString().includes(".")))) {
            return;
        }
        answer.innerText += e.target.innerText;
        calculation.innerText += e.target.innerText;
        num2 += e.target.innerText;
    }
    
}

function operatorInsert(e) { // Operators
    if (expression !== "" && num2 === "") {
        return;
    }
    if (num2 !== "") {
        let ans = equalOperation();
        expression = e.target.innerText;
        num1 = ans;
        calculation.innerText = ans + "    " + expression;
    } else {
        calculation.innerText += "    " + e.target.innerText;
        expression = e.target.innerText;
    }
}

equal.addEventListener('click', equalOperation); // equal button
function equalOperation() { // equal operation
    let n1 = Number(num1);
    let n2 = Number(num2);
    let ans = 0;
    num1 = "";
    num2 = "";
    if (expression == "+") {
        ans = n1 + n2;
        expression = "";
    } else if (expression == "-") {
        ans = n1 - n2;
        expression = "";
    } else if (expression == "x") {
        ans = n1 * n2;
        expression = "";
    } else if (expression == "/") {
        ans = n1 / n2;
        expression = "";
    } else if (expression == "^") {
        ans = Math.pow(n1, n2);
        expression = "";
    }
    num1 = ans;
    answer.innerText = ans;
    calculation.innerText = ans + expression;
    return ans;
}

ac.addEventListener('click', () => { // ac button
    answer.innerText = "";
    calculation.innerText = "";
    num1 = "";
    num2 = "";
});

del.addEventListener('click', () => { // del button
    if (num2 !== "") {
        if (typeof num2 == "number") {
            num2 = num2.toString();
        }
        num2Del = true;
        num2 = num2.slice(0, -1);
        answer.innerText = num2;
    } else if (num1 !== "" && !num2Del) {
        if (typeof num1 == "number") {
            num1 = num1.toString();
        }
        num1 = num1.slice(0, -1);
        answer.innerText = num1;
    }
});

// ***************************
// End of Code
// ***************************