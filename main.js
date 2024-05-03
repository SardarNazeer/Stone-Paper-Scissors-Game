// declaring 2 variable for the score of user and comp with 0

let user = 0;
let comp = 0;

// for selecting the boxes 

const choices = document.querySelectorAll(".choice");

// for showing the messsage 

const msg = document.querySelector("#msg");

// for accesing the user and computer score paragraph 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// generating the computer choice randomly 

const genCompChoice = () => {

    // comp will randomly choose betwen them 

    const option = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
}

// drawgame ke liye function

const drawGame = () => {
    msg.innerText = "Game was draw play again!";
    msg.style.backgroundColor = "#081b31";
};

// winner show karne ke liye 

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        user++;
        
        // for updating the user score para 

        userScorePara.innerText = user;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comp++;
        
        // for updating the user score para 

        compScorePara.innerText = comp;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// computer ke selection ke liye 

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // draw game 
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){

            // scissor, paper 

            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){

            // rock, scissor 

            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock, paper 

            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// har choice pe addEventListener lagane ke liye 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})