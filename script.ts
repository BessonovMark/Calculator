// global 
let firstNumber = 0;
let curNumber = 0;
let res = 0;
let Action = String();
let inputElement = document.getElementById("input");


function currenter(input){
  if (curNumber < 1000000000000000 && curNumber > 0) {
    curNumber *= 10;
  }
  curNumber += input;
  //inputElement.innerHTML =  curNumber.toString();
  inputElement.innerHTML = curNumber.toString();
};

function operator(act: () => void){
  act();
  inputElement.innerHTML = firstNumber.toString() + ' ' + Action;
}

function addition(){
  firstNumber = curNumber;
  curNumber = 0;
  Action = "+";
};

function divide(){
  firstNumber = curNumber;
  curNumber = 0;
  Action = "/";
};

function subtract(){
  firstNumber = curNumber;
  curNumber = 0;
  Action = "-";
};

function multiply(){
  firstNumber = curNumber;
  curNumber = 0;
  Action = "*";
};



function calculation(){
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
  inputElement.innerHTML = res.toString();
  Action = String();
  curNumber = res;
  firstNumber = 0;
};



function clearCalc(){
  curNumber = 0;
  firstNumber = 0;
  inputElement.innerHTML = curNumber.toString();
};
