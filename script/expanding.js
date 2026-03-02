panels = document.querySelectorAll('.panel')

panels[0].classList.add('active')

for (let i = 0; i < 5; i = i + 1){
    panels[i].addEventListener('click', () => {
        removeActiveFromAllPanels()
        panels[i].classList.add('active')
    })
}

function removeActiveFromAllPanels() {
    for (let i = 0; i < 5; i = i + 1){
        panels[i].classList.remove('active')
    }
}
