const navMenu = document.getElementById('navMenu')
const menuHamburguer = document.getElementById('icon-menu')
const menuSpans = document.getElementById('animated-icon2')

function activeMenu() {
  navMenu.classList.toggle('active')
  menuSpans.classList.toggle('open')
}

menuHamburguer.addEventListener('click', activeMenu)

function logar() {
  var login = document.getElementById('login').value
  var senha = document.getElementById('senha').value

  if (login == 'admin' && senha == 'admin') {
    alert('Sucesso!')
    location.href = './pedidos.html'
  } else {
    alert('Usuário ou senha incorretos')
  }
}
