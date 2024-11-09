const calculateBtn = document.querySelector('.btn');
const message = document.querySelector('.message');
const amountEl = document.querySelector('.amount');
const tipAmountEl = document.querySelector('.tip_amount');
const totalEl = document.querySelector('.total');
const restart = document.querySelector('.reset-btn')

const generateTip =()=>{
    calculateBtn.addEventListener('click', function(e){
        const billValue = document.querySelector('#billAmount').value;
        const tipValue = document.querySelector('#tip_percentage').value;

        if(isNaN(billValue) || isNaN(tipValue) || billValue < 0 || tipValue < 0
            ||  billValue === '' || tipValue === ''){
            message.textContent = 'Please Enter valid number!'
            return;
        }

        if(billValue === '' || tipValue === ''){
            message.textContent = 'Please Enter valid number!'
            return;
        }
        const billAmount = parseFloat(billValue);
        const tipPercentage = parseFloat(tipValue);

        let tipAmount = (billAmount * tipPercentage)/100;
        let TotalAmount = billAmount + tipPercentage;
        
        
        amountEl.textContent = `Amount: $ ${billAmount}`;

        tipAmountEl.textContent = `Tip Amount: $ ${tipAmount.toFixed(2)}`;

        totalEl.textContent = `Total Amount: $ ${TotalAmount.toFixed(2)}`;
            
    });
};

generateTip();


const restartTipGeneration = ()=>{
    restart.addEventListener('click',(e)=>{
        document.querySelector('#billAmount').value = '';
        document.querySelector('#tip_percentage').value = '';
        amountEl.textContent  = `Amount: $ 0`;
        tipAmountEl.textContent = `Tip Amount: $ 0.00`;
        totalEl.textContent = `Total Amount: $ 0.00`;
        message.textContent = '';
    });
};


restartTipGeneration();