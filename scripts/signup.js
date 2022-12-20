const signupButton = document.getElementById('cadastrar')

signupButton.addEventListener('click', function(event) {
  event.preventDefault()

  location.href = './login.html'
})