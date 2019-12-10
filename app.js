let calculator = {
    display: '0',
    firstOperand: null,
    secondOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function getDigit(digit){
  const {display, waitingForSecondNumber} = calculator;

  if(waitingForSecondNumber){
    calculator.display = digit;
    calculator.waitingForSecondNumber = false;
  } else {
    if(calculator.display.length >= 10){ return;}
    if(calculator.display.includes('.')){
      let decimal = calculator.display.split('.')[1];
      if(decimal.length >= 3) { return;}
    } 

    calculator.display = display === '0' ? digit : display + digit;
  }
}

function setDecimal(dot){
  if(!calculator.display.includes(dot)){
    calculator.display += dot;
  }
}

function getOperator(nextOperator){
  
}

function doCalculation(operator, num1, num2){
  let result;
  console.log(num1, num2);
  switch(operator){
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2; 
      break;
    case '+': 
      resutl = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '=':
      result = num2;
      break;
    }
    return parseFloat(result).toFixed(3);
}


const keys = document.querySelector('.buttons');
keys.addEventListener('click', (event) => {
  const { target } = event;
  
  if(!target.matches('button')) { return;}

  if(target.classList.contains('operator')){
    console.log('operator!');
  }

  if(target.classList.contains('decimal')){
    console.log('decimal!');
  }

  if(target.classList.contains('equal')){
    console.log('equal!');
  }

  if(target.classList.contains('clear')){
    console.log('clear all!');
  }


})