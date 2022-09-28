const totalScore = {
    computerScore: 0,
    playerScore: 0
}


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0;
    }else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        score = 1
    }else if (playerChoice == "Paper" && computerChoice == "Rock") {
        score = 1
    }else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        score = 1
    }else{
        score = -1
    }
    
    return score
    
    
}

function showResult(score, playerChoice, computerChoice) {
    const result = document.querySelector(".result")
    const hands = document.querySelector(".hands")
    const playerScore  = document.querySelector(".player-score")
    if (score == -1) {
        result.innerText  = "You Lost!"
    }else if (score == 0) {
        result.innerText = "Draw!"
    }else{
        result.innerText  = "You Won!"
    }

    hands.innerText  = `${playerChoice} vs ${computerChoice}`
    playerScore.innerText = ` Your Score: ${totalScore.playerScore}, Computer Score: ${totalScore.computerScore}`
}

function onClickBtn(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScore.playerScore += score
    totalScore.computerScore -= score
    showResult(score, playerChoice, computerChoice)
}



function playGame() {
    const btns  = document.querySelectorAll(".btn")
    btns.forEach((btn)=>{
        btn.addEventListener("click", (element)=>{
            onClickBtn(element.target.id) 
        })
    })

    const endGameBtn  = document.querySelector(".game-end-btn")
    endGameBtn.addEventListener("click", endGame)
}

function endGame(totalScore){
     totalScore.playerScore = 0
     totalScore.computerScore = 0
     const result = document.querySelector(".result")
    const hands = document.querySelector(".hands")
    const playerScore  = document.querySelector(".player-score")
    playerScore.innerText = ""
    hands.innerText = ""
    result.innerText = ""
}
playGame()



