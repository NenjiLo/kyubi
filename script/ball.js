const ballRadius = 30;
const ballSpeed = 5;

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let ballXPosition = windowWidth / 2 - ballRadius;
let ballYPosition = windowHeight / 2 - ballRadius;
let ballXDirection = 1;
let ballYDirection = 1;

const ball = document.createElement("div");
function createBall() {
    document.body.appendChild(ball);
    ball.style.height = `${2 * ballRadius}px`;
    ball.style.width = `${2 * ballRadius}px`;
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "green";
    ball.style.position = "absolute";
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection;
    ballYPosition = ballYPosition + ballSpeed * ballYDirection;
    if (
        ballXPosition <= 0 ||
        ballXPosition >= windowWidth - (2 * ballRadius)
    ) {
        ballXDirection = ballXDirection * -1;
    }

    if (
        ballYPosition <= 0 ||
        ballYPosition >= windowHeight - (2 * ballRadius)
    ) {
        ballYDirection = ballYDirection * -1;
    }

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;
}

createBall();
setInterval(moveBall, 10);
