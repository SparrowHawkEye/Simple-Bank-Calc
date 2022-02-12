const emailInput = document.getElementById('user-email');
const passwordInput = document.getElementById('user-password');
document.getElementById('login-btn').addEventListener('click', function(){
  if(emailInput.value == "maksud@gmail.com" && passwordInput.value == 1234){
    window.location.href = 'banking.html';
  }else{
    alert (`Please Provide a valid User Email and Password`);
  }
})