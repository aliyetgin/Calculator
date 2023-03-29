const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    return operator(num1, num2);
}
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-btn");
let displayVal = "";
numberButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display.innerText += e.target.innerText;
        displayVal += e.target.innerText;
    });
});

let op;
let firstVal = "";

 const calculate = function() {
  let result;
    if(op === 'add') {
         result = add(Number.parseInt(firstVal), Number.parseInt(displayVal));
         display.innerText = result;
         displayVal = result;
          op = "";
    } else if(op === 'subtract') {
        result = subtract(Number.parseInt(firstVal), Number.parseInt(displayVal));
        display.innerText = result;
        displayVal = result;
        firstVal = "";
         op = "";
    } else if(op === 'multiply') {
        result = multiply(Number.parseInt(firstVal), Number.parseInt(displayVal));
        display.innerText = result;
        displayVal = result;
        firstVal = "";
         op = "";
    } else if(op === 'divide') {
        result = divide(Number.parseInt(firstVal), Number.parseInt(displayVal));
        display.innerText = result;
        displayVal = result;
        firstVal = "";
        op = "";
    }
 }


const opButtons = document.querySelectorAll('.operator-btn');
opButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(firstVal !== "" && displayVal !== "") {
            calculate();
            console.log("calculated");
        }

        let lastChar = display.innerText[display.innerText.length - 1];

       
        //lastChar !== "+" && lastChar !== "-" && lastChar !== "÷" && lastChar !== "×"
          
        if ( !["+", "-", "×", "÷"].includes(lastChar)) {
            firstVal = displayVal;
            displayVal = "";
            op = e.target.id;
            display.innerText += e.target.innerText;
        }
       
    });
})

 const equal = document.querySelector('#equal');
 equal.addEventListener('click', calculate);




const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  display.innerText = "";
  displayVal = "";
  firstVal = "";
})
