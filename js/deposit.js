document.getElementById('deposit-btn').addEventListener('click', function(){
  let depositField = document.getElementById('deposit-field');
  let depositValue = depositField.value;

  let depositTotal = document.getElementById('deposit-total').innerText = depositValue;
})