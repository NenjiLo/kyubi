loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 30)

function blurring() {
    load = load + 1
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1-load/100
    bg.style.filter = `blur(${50-load/2}px)`

    if (load > 99) {
        clearInterval(int)
    }
}
