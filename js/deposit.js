document.getElementById('deposit-btn').addEventListener('click', function(){
   let depositField = document.getElementById('deposit-field');
   let depositOldValue = depositField.value;
   let depositNewValue = parseFloat(depositOldValue);

   let depositTotal = document.getElementById('deposit-total');
   let depositTotalOld = depositTotal.innerText;   
   let depositTotalNew = parseFloat(depositTotalOld);

   let currentDepositTotal = depositNewValue + depositTotalNew;
   depositTotal.innerText = currentDepositTotal;
   depositField.value = '';

   let totalBalanceField = document.getElementById('total-balance');
   let totalBalanceOld = totalBalanceField.innerText;
   let totalBalanceNew = parseFloat(totalBalanceOld);

   let currentTotalBalance = totalBalanceNew + depositNewValue;
   totalBalanceField.innerText = currentTotalBalance;
})