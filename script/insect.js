
const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const time_el = document.getElementById('time');
const score_el = document.getElementById('score');
const message_el = document.getElementById('message');


let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up');
    startGame();
});

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');

        selected_insect = { src, alt };

        screens[1].classList.add('up');

        setTimeout(createInsect, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    time_el.innerHTML = `Time: ${m}:${s}`;

    seconds++;
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');

    const { x, y } = getRandomLocation();

    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;

    insect.innerHTML = `
        <img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)">
    `;

    insect.addEventListener('click', catchInsect);

    game_container.appendChild(insect);
}


function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;

    return { x, y };
}


function catchInsect() {
    increaseScore();
    this.classList.add('caught');

    setTimeout(() => {
        this.remove();
    }, 2000);

    addInsects();
}


function increaseScore() {
    score++;

    if (score > 19) {
        message_el.classList.add('visible');
    }

    score_el.innerHTML = `Score: ${score}`;
}


function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}
