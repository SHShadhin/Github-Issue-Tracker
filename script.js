// sign in 
document.getElementById('sign-btn').addEventListener('click', function () {
  const textInput = document.getElementById('text-input');
  const userInput = textInput.value;

  const passInput = document.getElementById('pass-input');
  const password = passInput.value;

  // console.log(userInput,password)
  if (userInput == 'admin' && password == 'admin123') {
    alert('login success')
    window.location.assign("index2.html");

  } else {
    alert('Incorrect username or password')
    return;
  }
})

