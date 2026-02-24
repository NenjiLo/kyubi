loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 100

loadText.innerText = '${load}%'
loadText.styke.opacity = 1-load/100
bg.style.filter = "blur(30px)"
