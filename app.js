const calculator = {
  display: '0',
  firstOperand: null,
  waitingForSecond: false,
  secondOperand: null, 
  operator: null,
}

function getDigit(digit){
  const { waitingForSecond, display } = calculator;

  if(waitingForSecond == true){
    calculator.display = digit;
    calculator.waitingForSecond = false;
  } else {
    calculator.display = display === '0'? digit : display + digit;
  }    
}

function setDecimal(dot){
  if(calculator.waitingForSecond == true) { return;}

  if(!calculator.display.includes(dot)){
    calculator.display += dot;
  }
  updateScreen();
}

function handleOperator(operator){
  const {firstOperand, secondOperand, display } = calculator;

  if(firstOperand == null && secondOperand == null){

    calculator.firstOperand = parseFloat(display);
    calculator.display = '0';

  } else if (firstOperand != null){

    calculator.secondOperand = parseFloat(display);
    let result = doCalculation(operator, firstOperand, calculator.secondOperand);

    calculator.display = String(result);

    calculator.firstOperand = result;
    calculator.secondOperand = null;
    calculator.operator = null;
    
  }
  
  calculator.operator = operator;
  calculator.waitingForSecond = true;
}

function updateScreen(){
  const display = document.querySelector('.screen');
  display.value = calculator.display;
}


function doCalculation(operator, num1, num2){
  let result;

  switch(operator){
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2; 
      break;
    case '+': 
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '=':
      result = num2;
      break;
    }

    return parseFloat(result);
}

function showResult(){
  let {firstOperand, secondOperand, operator, display} = calculator;

  if(firstOperand == null || operator == null) { return;}
  if(secondOperand != null && operator != null) { return;}

  secondOperand = parseFloat(display);
  calculator.secondOperand = secondOperand;
  const result = doCalculation(operator, firstOperand, secondOperand);
  
  calculator.display = String(result);
  calculator.firstOperand = null;
  calculator.secondOperand = null;
  calculator.operator = null;
  calculator.waitingForSecond = false;
  updateScreen();  
}

function clearCalculator(){
  calculator.display = '0';
  calculator.firstOperand = null;
  calculator.secondOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator =  null;
}


updateScreen();

const keys = document.querySelector('.buttons');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    
    if(!target.matches('button')) { return;}
  
    if(target.classList.contains('operator')){
      handleOperator(target.value);
      updateScreen();
      return;
    }
  
    if(target.classList.contains('decimal')){
      setDecimal(target.value);
      return;
    }
  
    if(target.classList.contains('equal')){
      showResult();
      updateScreen();
      return;
    }
  
    if(target.classList.contains('clear')){
      clearCalculator();
      updateScreen();
      return;
    }
  
    getDigit(target.value);
    updateScreen();
  
  })