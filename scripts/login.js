const loginButton = document.getElementById('entrar')

loginButton.addEventListener('click', function(event) {
  event.preventDefault()

  location.href = './main.html'
})