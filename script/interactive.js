rock = document.querySelector('.rock')
paper = document.querySelector('.paper')
scissors = document.querySelector('.scissors')
result = document.querySelector('.result h3')

choices = ['rock', 'paper', 'scissors']

function play(userChoice) {
    computerChoice = choices[Math.floor(Math.random() * 3)]

    if (userChoice == computerChoice) {
        result.textContent = "Tie! Computer chose " + computerChoice
    }
    else if (
        (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'paper' && computerChoice == 'rock') ||
        (userChoice == 'scissors' && computerChoice == 'paper')
    ) {
        result.textContent = "You Win! Computer chose " + computerChoice
    }
    else {
        result.textContent = "You Lose! Computer chose " + computerChoice
    }
}

rock.addEventListener('click', () => {
    play('rock')
})

paper.addEventListener('click', () => {
    play('paper')
})

scissors.addEventListener('click', () => {
    play('scissors')
})
