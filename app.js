
(function(){
  const calculator = {
    display: '0',
    firstOperand: null,
    waitingForSecond: false,
    secondOperand: null, 
    operator: null,
    clear: function(){
      this.display = '0';
      this.firstOperand = null;
      this.secondOperand = null;
      this.waitingForSecondOperand = false;
      this.operator =  null;
    },
    getDigit: function(digit){
      const { waitingForSecond, display } = calculator;
  
      if(waitingForSecond == true){
        this.display = digit;
        this.waitingForSecond = false;
      } else {
        this.display = this.display === '0'? digit : this.display + digit;
      }   
    },
    setDecimal: function(dot){
      if(calculator.waitingForSecond == true) { return;}
    
      if(!calculator.display.includes(dot)){
        calculator.display += dot;
      }
    }
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
        calculator.setDecimal(target.value);
        updateScreen();
        return;
      }
 
    });

    const equalButton = document.querySelector('#equal-btn');
    equalButton.addEventListener('click', function(event){
      showResult();
      updateScreen();
    })

    const clearButton = document.querySelector('#clear-btn');
    clearButton.addEventListener('click', function(event){
      calculator.clear();
      updateScreen();
    })

    const numberButtons = document.querySelectorAll('.number-btn');
    numberButtons.forEach(numberBtn => {
      numberBtn.addEventListener('click', function(event){
        calculator.getDigit(event.target.value);
        updateScreen();
      })
    })

})()
