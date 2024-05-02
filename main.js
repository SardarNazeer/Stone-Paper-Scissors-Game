// declaring 2 variable for the score of user and comp with 0

let user = 0;
let comp = 0;

// for selecting the boxes 

const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {

    // comp will randomly choose betwen them 

    const option = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
}

// computer ke selection ke liye 

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
}

// har choice pe addEventListener lagane ke liye 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})