let calculator = {
    display: '0',
    firstNumber: null,
    waitingForSecondNumber: false,
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

// what kind of data is num
const keys = document.querySelector('.buttons')
const display = document.querySelector('.screen');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const num = key.dataset.num
        const operator = key.dataset.key
        const displayedNum = display.textContent;
        if(!num){
          if(operator === 'clear'){ console.log('clear key!') }
          if(operator === '%') { console.log('division key!') }
          if(operator === 'x') { console.log('multiplication key!') }
          if(operator === '-') { console.log('substraction key!') }
          if(operator === '+') { console.log('addition key!')}
          if(operator === '=') { console.log('equal key!')}
          if(operator === '.') { console.log('decimal key!')}
        }

        if(!operator){
            if(displayedNum === '0'){
              display.textContent = num
            } else {
              display.textContent = displayedNum + num
            }

        }


    }
})
