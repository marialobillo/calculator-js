let calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function initialize(){
    calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
    }
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
