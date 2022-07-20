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
let num1 = "";
let num2 = "";
let expression = "";


















const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operation'));
numbers.forEach(number => number.addEventListener('click', numberInsert));
operators.forEach(operator => operator.addEventListener('click', operatorInsert));

function numberInsert(e) {
    answer.innerText += e.target.innerText;
    calculation.innerText += e.target.innerText;
    if (expression === "") {
        num1 += e.target.innerText;
        console.log("num1: " + num1);
    } else {
        if (num2 === "") {
            answer.innerText= e.target.innerText;
        }
        num2 += e.target.innerText;
    }
    
}
function operatorInsert(e) {
    if (num2 !== "") {
        let ans = equalOperation();
        expression = e.target.innerText;
        num1 = ans;
        calculation.innerText = ans + "      " + expression;
    } else {
        calculation.innerText += "      " + e.target.innerText;
        expression = e.target.innerText;
    }
}
equal.addEventListener('click', equalOperation); // equal button
function equalOperation() {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let ans = 0;
    num1 = "";
    num2 = "";
    console.log("n1: " + n1 + " n2: " + n2 + " expression: " + expression);
    if (expression == "+") {
        ans = n1 + n2;
        console.log(ans);
        expression = "";
    } else if (expression == "-") {
        ans = n1 - n2;
        console.log(ans);
        expression = "";
    } else if (expression == "x") {
        ans = n1 * n2;
        console.log(ans);
        expression = "";
    } else if (expression == "/") {
        ans = n1 / n2;
        console.log(ans);
        expression = "";
    }
    num1 = ans;
    answer.innerText = ans;
    calculation.innerText = ans + "      " + expression;
    return ans;
}
ac.addEventListener('click', () => { // ac button
    answer.innerHTML = "";
    calculation.innerHTML = "";
    num1 = "";
    num2 = "";
});

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="js-file.js" defer></script>
    <title>Document</title>
</head>
<body>
    <h2>Calculator!</h2>
    <div class="main">
        <div class="answer-box">
            <div class="calculation"> 
                8 * 9 * 10;
            </div>
            <div class="answer">
                72 * 10
            </div>
        </div>
        <div class="buttons">
            <div class="row fifth"> 
                <button class="button ac" style="background-color: green;">
                    ac
                </button>
                <button class="button plusminus" style="background-color: green;">
                    +/-
                </button>
                <button class="button power" style="background-color: green;">
                    exp
                </button>
                <button class="button equals">
                    =
                </button>
            </div>
            <div class="row fourth">
                <button class="button number 7">
                    7
                </button>
                <button class="button number 8">
                    8
                </button>
                <button class="button number 9">
                    9
                </button>
                <button class="button divide operation">
                    /
                </button>
            </div>
            <div class="row third">
                <button class="button number 4">
                    4
                </button>
                <button class="button number 5">
                    5
                </button>
                <button class="button number 6">
                    6
                </button>
                <button class="button multiply operation">
                    x
                </button>
            </div>
            <div class="row second">
                <button class="button number 1">
                    1
                </button>
                <button class="button number 2">
                    2
                </button>
                <button class="button number 3">
                    3
                </button>
                <button class="button subtract operation">
                    -
                </button>
            </div>
            <div class="row first">
                <button class="button number 0">
                    0
                </button>
                <button class="button number ." style="background-color: green;">
                    .
                </button>
                <button class="button delete" style="background-color: green;">
                    del
                </button>
                <button class="button add operation">
                    +
                </button>
            </div>
        </div>
    </div>
    <div class="footer">
        Developed by Ishaan Sharma
    </div>
</body>
</html>
*/