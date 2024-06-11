// Rock, Paper, Scissors Example
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText+"\n", resolve);
  });
}


class Game {
  matchups = {
    rock: {
      beats: "scissors",
      losesTo: "paper",
    },
    paper: {
      beats: "rock",
      losesTo: "scissors",
    },
    scissors: {
      beats: "paper",
      losesTo: "rock",
    },
  };

  playerScore = 0;
  computerScore = 0;

  getMove() {
    const moves = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return moves[idx];
  }

  async run() {
    console.log("Let's play a game of Rock, Paper, Scissors");
    console.log("Whoever wins 3 matches, wins the game. Let's Begin!");

    while (true) {
      console.log(`You: ${this.playerScore} Computer: ${this.computerScore}`);
      let playerAnswer = await ask("Rock, Paper, Scissors - Shoot!");
      playerAnswer = playerAnswer.toLowerCase();

      if (this.matchups[playerAnswer] === undefined) {
        console.log("Please enter rock paper or scissors. Try Again");
        continue;
      }

      let computerAnswer = this.getMove();
      console.log(`Computer chooses ${computerAnswer}`);

      if (this.matchups[playerAnswer].beats === computerAnswer) {
        console.log(
          `Your ${playerAnswer} beats the Computer's ${computerAnswer}, you win this round!`
        );
        this.playerScore += 1;
      } else if (this.matchups[playerAnswer].losesTo === computerAnswer) {
        console.log(
          `The computer's ${computerAnswer} beats your ${playerAnswer}, the computer wins this round`
        );
        this.computerScore += 1;
      } else {
        console.log(`You and the computer have both guessed ${playerAnswer}`);
      }

  
      if (this.playerScore === 3) {
        console.log(`You: ${this.playerScore} Computer: ${this.computerScore}`);
        console.log("Congrats, you won the game!");
        break;
      }
      if (this.computerScore === 3) {
        console.log(`You: ${this.playerScore} Computer: ${this.computerScore}`);
        console.log("The computer won the game");
        break;
      }
    }
  }
}

let firstGame = new Game();


firstGame.run();

