const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

let ballRadius = 20;
let ballSpeed = 5;

let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;

let ballXDirection = 1;
let ballYDirection = 1;

let paddleWidth = 10;
let paddleHeight = 100;
let paddleSpeed = 20;

let lPaddleXPosition = 20;
let lPaddleYPosition = windowHeight / 2 - paddleHeight / 2;

let rPaddleXPosition = windowWidth - 20 - paddleWidth;
let rPaddleYPosition = windowHeight / 2 - paddleHeight / 2;

let score = 0;
let level = 1;

let wKey = false;
let sKey = false;
let upKey = false;
let downKey = false;

const ball = document.createElement("div");
const lPaddle = document.createElement("div");
const rPaddle = document.createElement("div");
const scoreDisplay = document.createElement("div");
const levelDisplay = document.createElement("div");
const gameOverText = document.createElement("div");

document.body.appendChild(ball);
document.body.appendChild(lPaddle);
document.body.appendChild(rPaddle);
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

function createPaddles() {
    lPaddle.style.width = `${paddleWidth}px`;
    lPaddle.style.height = `${paddleHeight}px`;
    lPaddle.style.backgroundColor = "blue";
    lPaddle.style.position = "absolute";
    lPaddle.style.left = `${lPaddleXPosition}px`;

    rPaddle.style.width = `${paddleWidth}px`;
    rPaddle.style.height = `${paddleHeight}px`;
    rPaddle.style.backgroundColor = "red";
    rPaddle.style.position = "absolute";
    rPaddle.style.left = `${rPaddleXPosition}px`;
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

    if (ballTop <= 0 || ballBottom >= windowHeight) {
        ballYDirection *= -1;
    }

    if (ballLeft <= 0) {
        endGame("Player 2 Wins!");
    }

    if (ballRight >= windowWidth) {
        endGame("Player 1 Wins!");
    }

    if (
        ballLeft <= lPaddleXPosition + paddleWidth &&
        ballTop < lPaddleYPosition + paddleHeight &&
        ballBottom > lPaddleYPosition &&
        ballXDirection < 0
    ) {
        ballXDirection *= -1;
        score++;
        checkLevelUp();
    }

    if (
        ballRight >= rPaddleXPosition &&
        ballTop < rPaddleYPosition + paddleHeight &&
        ballBottom > rPaddleYPosition &&
        ballXDirection > 0
    ) {
        ballXDirection *= -1;
        score++;
        checkLevelUp();
    }

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

function checkLevelUp() {
    if (score % 10 === 0) {
        level++;
        ballSpeed += 1;
    }
}

function movePaddles() {
    if (wKey && lPaddleYPosition > 0) {
        lPaddleYPosition -= paddleSpeed;
    }
    if (sKey && lPaddleYPosition < windowHeight - paddleHeight) {
        lPaddleYPosition += paddleSpeed;
    }

    if (upKey && rPaddleYPosition > 0) {
        rPaddleYPosition -= paddleSpeed;
    }
    if (downKey && rPaddleYPosition < windowHeight - paddleHeight) {
        rPaddleYPosition += paddleSpeed;
    }

    lPaddle.style.top = `${lPaddleYPosition}px`;
    rPaddle.style.top = `${rPaddleYPosition}px`;
}

function endGame(message) {
    ball.style.display = "none";
    gameOverText.style.display = "block";
    gameOverText.textContent = message;
    cancelAnimationFrame(animationId);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "w") wKey = true;
    if (event.key === "s") sKey = true;
    if (event.key === "ArrowUp") upKey = true;
    if (event.key === "ArrowDown") downKey = true;
});

document.addEventListener("keyup", (event) => {
    if (event.key === "w") wKey = false;
    if (event.key === "s") sKey = false;
    if (event.key === "ArrowUp") upKey = false;
    if (event.key === "ArrowDown") downKey = false;
});

function animate() {
    moveBall();
    movePaddles();
    updateUI();
    animationId = requestAnimationFrame(animate);
}

let animationId;

createBall();
createPaddles();
setupUI();
updateUI();
animate();
