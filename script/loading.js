loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 30)

loadText.innerText = `${load}%`
loadText.style.opacity = 1-load/100
bg.style.filter = "blur(50px)"
bg.style.filter = `blur(${50-load/2}px)`
