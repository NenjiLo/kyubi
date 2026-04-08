const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = 3000;
const holdTime = 1500;

function breatheAnimation() {
    text.innerText = 'Breathe In';
    container.classList.remove('shrink');
    container.classList.add('grow');

    setTimeout(() => {
        text.innerText = 'Hold';
    }, breatheTime);

    setTimeout(() => {
        text.innerText = 'Breathe Out';
        container.classList.remove('grow');
        container.classList.add('shrink');
    }, breatheTime + holdTime);
}

breatheAnimation();
setInterval(breatheAnimation, totalTime);
