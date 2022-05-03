var navigationBar = document.querySelector('nav');

var button = document.querySelector('.icon')

button.addEventListener('click', (event) => {
    navigationBar.classList.toggle('active')
})