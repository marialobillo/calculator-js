let calculator = {
    display: '0',
    firstOperand: null,
    secondOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function getDigit(digit){
  const {display} = calculator;

  if(calculator.display.length >= 10){ return;}
  if(calculator.display.includes('.')){
    let decimal = calculator.display.split('.')[1];
    if(decimal.length >= 3) { return;}
  } 

  calculator.display = display === '0' ? digit : display + digit;
  
}

function setDecimal(dot){
  if(!calculator.display.includes(dot)){
    calculator.display += dot;
  }
}

function getOperator(operator){
  const display = calculator.display;

  if(calculator.firstOperand == null){
    calculator.firstOperand = parseFloat(display);
    calculator.operator = operator;
    calculator.waitingForSecondOperand = true;
    calculator.display = '0';
    updateScreen();
  console.log(result);

function showResult(){
  const {firstOperand, operator, display} = calculator;
  if(firstOperand == null || operator == null) { return;}
  
  const secondOperand = parseFloat(display);
  const result = doCalculation(operator, firstOperand, secondOperand);
  
  calculator.display = String(result);
  calculator.firstOperand = result;
  calculator.secondOperand = null;
  updateScreen();  
  

}

function doCalculation(operator, num1, num2){
  let result;
  console.log(operator, num1, num2);
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

function updateScreen(){
  const display = document.querySelector('.screen');
  display.value = calculator.display;
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
    getOperator(target.value);

    return;
  }

  if(target.classList.contains('decimal')){
    setDecimal(target.value);
    return;
  }

  if(target.classList.contains('equal')){
    updateScreen();
    showResult();
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