// ***************************
// VARIABLE DECLARATIONS
// ***************************

let ac = document.querySelector('.ac');
let calculation = document.querySelector('.calculation');
let answer = document.querySelector('.answer');
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
// Keyboard Event Listeners
// ***************************

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    operands = ['+', '-', '*', '/', '^'];
    others = ['Backspace',/*'Enter',*/'='];
    if (nums.includes(e.key)) {
        numberInsertKey(e);
    } else if (operands.includes(e.key)) {
        operatorInsertKey(e);
    } else if (others.includes(e.key)) {
        if (e.key === others[0]) {
            deletion();
        } else {
            console.log(num1 + " " + typeof num1);
            console.log(num2 + " " + typeof num2);
            equalOperation();
        }
    }
});

function operatorInsertKey(e) {
    if (expression !== "" && num2 === "") {
        return;
    }
    if (num2 !== "") {
        let ans = equalOperation();
        expression = e.key;
        num1 = ans;
        calculation.innerText = ans + "    " + expression;
    } else {
        calculation.innerText += "    " + e.key;
        expression = e.key;
    }
}

function numberInsertKey(e) { // Numbers and +/-
    num2Del = false;
    if (expression === "") {
        if (e.key === "." && ((typeof num1 == "string" && num1.includes(".")) || (num1.toString().includes(".")))) {
            return;
        }/*
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
            calculation.innerText = num1;
            return;
        }*/
        answer.innerText += e.key;
        calculation.innerText += e.key;
        num1 += e.key;
    } else {
        /*if (e.target.innerText === "+/-") {
            if (num2 === "") {
                answer.innerText = "-";
                calculation.innerText += "    -";
                num2 = "-";
                return;
            }
            num2 /= -1;
            num2 = num2.toString();
            answer.innerText = num2;
            let temp = calculation.innerText;
            let index = temp.indexOf(expression);
            console.log(index);
            temp = temp.slice(0, index + 1) + "    -" + temp.slice(index + 2);
            calculation.innerText = temp;
            return;
        }*/
        if (num2 === "") {
            answer.innerText = e.key;
            calculation.innerText += "    " + e.key;
            num2 += e.key;
            return;
        }
        if (e.key === "." && ((typeof num2 == "string" && num2.includes(".")) || (num2.toString().includes(".")))) {
            return;
        }
        answer.innerText += e.key;
        calculation.innerText += e.key;
        num2 += e.key;
    }
}

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
            calculation.innerText = num1;
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
            let temp = calculation.innerText;
            let index = temp.indexOf(expression);
            console.log(index);
            temp = temp.slice(0, index + 1) + "    -" + temp.slice(index + 2);
            calculation.innerText = temp;
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
        console.log(calculation.innerText);
        console.log("num2: " + num2);
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
    if (num1 === "" || expression === "" || num2 === "") {
        return;
    }
    let n1 = Number(num1);
    let n2 = Number(num2);
    let ans = 0;
    num1 = "";
    num2 = "";
    console.log("sup   " + n1 + "   " + n2);
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

del.addEventListener('click', deletion);
function deletion() {
    if (num2 !== "") {
        if (typeof num2 == "number") {
            num2 = num2.toString();
        }
        num2Del = true;
        num2 = num2.slice(0, -1);
        answer.innerText = num2;
        calculation.innerText = calculation.innerText.slice(0, -1);
    } else if (num1 !== "" /*&& !num2Del*/ && expression === "") {
        if (typeof num1 == "number") {
            num1 = num1.toString();
        }
        num1 = num1.slice(0, -1);
        answer.innerText = num1;
        calculation.innerText = calculation.innerText.slice(0, -1);
    } else {
        expression = "";
        calculation.innerText = num1;
    }
}

// ***************************
// End of Code
// ***************************