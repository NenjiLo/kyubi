const ballRadius = 30;
const ballSpeed = 5;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;

let ballXDirection = 1;
let ballYDirection = 1;

const ball = document.createElement("div");
document.body.appendChild(ball);

const lPaddle = document.createElement("div");
document.body.appendChild(lPaddle);

let lPaddleWidth = 20;
let lPaddleHeight = 100;

let lPaddleSpeed = 20;
let lPaddleYPosition = windowHeight / 2 - lPaddleHeight / 2;

function createBall() {
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "green";

    ball.style.position = "absolute";
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

function createLPaddle() {
    lPaddle.style.width = `${lPaddleWidth}px`;
    lPaddle.style.height = `${lPaddleHeight}px`;
    lPaddle.style.backgroundColor = "blue";

    lPaddle.style.position = "absolute";
    lPaddle.style.left = `20px`;
    lPaddle.style.top = `${lPaddleYPosition}px`;
}

function moveBall() {

    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    if (
        ballXPosition <= 0 ||
        ballXPosition >= windowWidth - (2 * ballRadius)
    ) {
        ballXDirection *= -1;
    }

    if (
        ballYPosition <= 0 ||
        ballYPosition >= windowHeight - (2 * ballRadius)
    ) {
        ballYDirection *= -1;
    }

    if (
        ballXPosition <= (20 + lPaddleWidth) &&
        ballYPosition + (2 * ballRadius) >= lPaddleYPosition &&
        ballYPosition <= lPaddleYPosition + lPaddleHeight
    ) {
        ballXDirection *= -1;
    }

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

document.addEventListener("keyup", (event) => {

    if (event.key === "w") {

        if (lPaddleYPosition <= 0) {
            lPaddleYPosition = 0;
        } else {
            lPaddleYPosition -= lPaddleSpeed;
        }
    }

    if (event.key === "s") {

        if (lPaddleYPosition >= windowHeight - lPaddleHeight) {
            lPaddleYPosition = windowHeight - lPaddleHeight;
        } else {
            lPaddleYPosition += lPaddleSpeed;
        }
    }

    lPaddle.style.top = `${lPaddleYPosition}px`;
});

createBall();
createLPaddle();
setInterval(moveBall, 10);
