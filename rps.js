function computerPlay(){
    let myArray = ["Rock", "Paper", "Scissors"];
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return randomChoice;
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "Rock"){
        resultArea.textContent = "Draw! Rock and rock";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        resultArea.textContent = "You Lose! Paper beats rock";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors"){
        resultArea.textContent = "You Win! Rock beats scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
        resultArea.textContent = "You win! Paper beats rock";
    }
    else if (playerSelection == "paper" && computerSelection == "Paper"){
        resultArea.textContent = "Draw! Paper and paper";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        resultArea.textContent = "You Lose! Scissors beats paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        resultArea.textContent = "You Lose! Rock beats scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        resultArea.textContent = "You Win! Scissors beats paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        resultArea.textContent = "Draw! Scissors and scissors";
    }
}

/*function game(){
    let player = 0;
    let comp = 0;
    for(let i = 0; i < 5; i++){
        let k = prompt("Choose rock (r), paper (p) or scissors (s)");
        let r = computerPlay();
        let ans = playRound(k, r);

        if (ans == 1) player++;
        else if (ans == 2) comp++;
        else if (ans == 4) i--;
    }
    
    if (player > comp) return "You win!";
    else if (comp == player) return "It's a DRAW!";
    else return "You lose!";
}


//let k = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
//let r = computerPlay();
//playRound(k, r);
//let winner = game();
//console.log(winner);
//console.log(ans);*/
const resultArea = document.querySelector(".winning-choice");
const playbuttons = document.querySelectorAll(".choice");
playbuttons.forEach(currentButton => {
    currentButton.addEventListener("click", function () {
        playRound(currentButton.id);
    })
    console.log("added eventlistener")
});
  //window.addEventListener('keydown', playSound);