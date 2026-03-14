buttons = document.querySelector('.buttons')


sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


for (let i = 0; i < 6; i = i + 1) {
    btn = document.createElement('button')
    btn.innerText = sounds[i]
    btn.classList.add('btn')
    btn.addEventListener('click', () => {
        stopSongs()
        document.querySelector(`.${sounds[i]}`).play()
    })
    buttons.appendChild(btn)
}


function stopSongs() {
    for (let i = 0; i < sounds.length, i = i + 1) {
        document.querySelector(`.${sounds[i]}`).pause()
        document.querySelector(`.${sounds[i]}`).curremtTime = 0
    }
}


