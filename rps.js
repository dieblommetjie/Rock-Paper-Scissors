function computerPlay(){
    let myArray = ["Rock", "Paper", "Scissors"];
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "Rock"){
        //console.log("Draw! Rock and rock");
        return 3;
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        //console.log("You Lose! Paper beats rock");
        return 2;
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors"){
        //console.log("You Win! Rock beats scissors");
        return 1;
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
        //console.log("You win! Paper beats rock");
        return 1;
    }
    else if (playerSelection == "paper" && computerSelection == "Paper"){
        //console.log("Draw! Paper and paper");
        return 3;
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        //console.log("You Lose! Scissors beats paper");
        return 2;
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        //console.log("You Lose! Rock beats scissors");
        return 2;
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        //console.log("You Win! Scissors beats paper");
        return 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        //console.log("Draw! Scissors and scissors");
        return 3;
    }
    else{
        //console.log("Invalid input");
        //let k = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
        //let r = computerPlay();
        //playRound(k, r);
        return 4;
    }
}

function game(){
    let player = 0;
    let comp = 0;
    for(let i = 0; i < 5; i++){
        let k = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
        let r = computerPlay();
        let ans = playRound(k, r);

        if (ans == 1) player++;
        else if (ans == 2) comp++;
        else if (ans == 4) i--;
    }
    
    if (player > comp) return "You win!";
    else return "You lose!";
}


//let k = prompt("Choose 'Rock', 'Paper' or 'Scissors'");
//let r = computerPlay();
//playRound(k, r);
let winner = game();
console.log(winner);
//console.log(ans);