const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

let ballRadius = 20;
let ballSpeed = 5;

let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;

let ballXDirection = 1;
let ballYDirection = 1;

let lPaddleWidth = 10;
let lPaddleHeight = 100;


let lPaddleSpeed = 20;
let lPaddleXPosition = 20;
let lPaddleYPosition = windowHeight / 2 - lPaddleHeight / 2;

let score = 0;
let level = 1;

let wKey = false;
let sKey = false;

const ball = document.createElement("div");
const lPaddle = document.createElement("div");
const scoreDisplay = document.createElement("div");
const levelDisplay = document.createElement("div");
const gameOverText = document.createElement("div");

document.body.appendChild(ball);
document.body.appendChild(lPaddle);
document.body.appendChild(scoreDisplay);
document.body.appendChild(levelDisplay);
document.body.appendChild(gameOverText);

function createBall() {
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "green";
    ball.style.position = "absolute";
}

function createLPaddle() {
    lPaddle.style.width = `${lPaddleWidth}px`;
    lPaddle.style.height = `${lPaddleHeight}px`;
    lPaddle.style.backgroundColor = "blue";
    lPaddle.style.position = "absolute";
    lPaddle.style.left = `${lPaddleXPosition}px`;
}

function setupUI() {
    scoreDisplay.style.position = "absolute";
    scoreDisplay.style.top = "10px";
    scoreDisplay.style.left = "10px";

    levelDisplay.style.position = "absolute";
    levelDisplay.style.top = "40px";
    levelDisplay.style.left = "10px";

    gameOverText.style.position = "absolute";
    gameOverText.style.top = "50%";
    gameOverText.style.left = "50%";
    gameOverText.style.transform = "translate(-50%, -50%)";
    gameOverText.style.fontSize = "40px";
    gameOverText.style.display = "none";
}

function updateUI() {
    scoreDisplay.textContent = `Score: ${score}`;
    levelDisplay.textContent = `Level: ${level}`;
}

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    let ballTop = ballYPosition;
    let ballBottom = ballYPosition + (2 * ballRadius);
    let ballLeft = ballXPosition;
    let ballRight = ballXPosition + (2 * ballRadius);

    let paddleTop = lPaddleYPosition;
    let paddleBottom = lPaddleYPosition + lPaddleHeight;
    let paddleRight = lPaddleXPosition + lPaddleWidth;

    // TOP & BOTTOM WALLS
    if (ballTop <= 0 || ballBottom >= windowHeight) {
        ballYDirection *= -1;
    }

    // RIGHT WALL
    if (ballRight >= windowWidth) {
        ballXDirection *= -1;
    }

    // LEFT WALL = GAME OVER
    if (ballLeft <= 0) {
        endGame();
    }

    // PADDLE COLLISION (ONLY FRONT SIDE)
    if (
        ballLeft <= paddleRight &&
        ballTop < paddleBottom &&
        ballBottom > paddleTop &&
        ballXDirection < 0
    ) {
        ballXDirection *= -1;
        score++;

        if (score % 10 === 0) {
            level++;
            ballSpeed += 1;
        }
    }

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

function movePaddle() {
    if (wKey && lPaddleYPosition > 0) {
        lPaddleYPosition -= lPaddleSpeed;
    }

    if (sKey && lPaddleYPosition < windowHeight - lPaddleHeight) {
        lPaddleYPosition += lPaddleSpeed;
    }

    lPaddle.style.top = `${lPaddleYPosition}px`;
}

function endGame() {
    ball.style.display = "none";
    gameOverText.style.display = "block";
    gameOverText.textContent = `Game Over - Score: ${score}`;
    cancelAnimationFrame(animationId);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "w") wKey = true;
    if (event.key === "s") sKey = true;
});

document.addEventListener("keyup", (event) => {
    if (event.key === "w") wKey = false;
    if (event.key === "s") sKey = false;
});

function animate() {
    moveBall();
    movePaddle();
    updateUI();
    animationId = requestAnimationFrame(animate);
}

let animationId;

createBall();
createLPaddle();
setupUI();
updateUI();
animate();
