box = document.querySelector('.box')

size = 50
direction = "bigger"

int set Interval(sizing, 30)

function sizing() {
    if size = 200 {
        direction = "smaller"
    }
    if size < 50 {
        direction = "bigger"
    }
    if (direction == "bigger") {
        size = size + 1
    } else {
        size = size - 1
    }
    box.style.width = `${size}px`
    box.style.height = `${size}px'

}
