// global 
var firstNumber = 0;
var curNumber = 0;
var res = 0;
var Action = String();
var inputElement = document.getElementById("input");
function currenter(input) {
    if (curNumber < 1000000000000000 && curNumber > 0) {
        curNumber *= 10;
    }
    curNumber += input;
    //inputElement.textContent =  curNumber.toString();
    inputElement.textContent = curNumber.toString();
}
;
function operator(act) {
    act();
    inputElement.textContent = firstNumber.toString() + ' ' + Action;
}
function addition() {
    firstNumber = curNumber;
    curNumber = 0;
    Action = "+";
}
;
function divide() {
    firstNumber = curNumber;
    curNumber = 0;
    Action = "/";
}
;
function subtract() {
    firstNumber = curNumber;
    curNumber = 0;
    Action = "-";
}
;
function multiply() {
    firstNumber = curNumber;
    curNumber = 0;
    Action = "*";
}
;
function calculation() {
    if (Action == "+") {
        res = curNumber + firstNumber;
    }
    else if (Action == "*") {
        res = curNumber * firstNumber;
    }
    else if (Action == "-") {
        res = firstNumber - curNumber;
    }
    else if (Action == "/") {
        res = firstNumber / curNumber;
    }
    inputElement.textContent = res.toString();
    Action = String();
    curNumber = res;
    firstNumber = 0;
}
;
function clearCalc() {
    curNumber = 0;
    firstNumber = 0;
    inputElement.textContent = curNumber.toString();
}
;
