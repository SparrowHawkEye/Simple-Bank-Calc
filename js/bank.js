document.getElementById('deposit-btn').addEventListener('click', function(){
  totalAmount('deposit-input','deposit-total');
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
  totalAmount('withdraw-input','withdraw-total');
})
function totalAmount(inputID,depositWithdrawID){
  const body = document.getElementsByTagName('body')[0];
  // console.log(body)
  const amount = document.getElementById(depositWithdrawID);
  const input = document.getElementById(inputID);
  const balance = document.getElementById('balance-total');
  const inputValue = Number(input.value);
  if (  inputValue >= 0){
    amount.textContent = inputValue + Number(amount.textContent);
    if (inputID == 'deposit-input' ){
    balance.textContent = Number(balance.textContent) + inputValue;
  } else {
    balance.textContent = Number(balance.textContent) - inputValue;
  }
  }else {
    body.style.backgroundColor = "red";
    alert ('Please Provide a Valid Amount of Moooooney');
  }
  input.value = '';
}