const choices=["Rock","Paper","Scissor"];
const playerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay =document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const restart = document.getElementById("restart");


function Restart(){
    playerDisplay.textContent="Player";
    ComputerDisplay.textContent="computer";
    resultDisplay.textContent="";
}

function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerchoice){
        result ="it's  a tie";
    }else{
        switch(playerchoice){
            case "rock":
              result =  (computerchoice === "scissor") ? "you win!" :"you lose!";
              break;
              case "paper":
                result =  (computerchoice === "rock") ? "you win!" :"you lose!";
                break;
                case "scissor":
                    result =  (computerchoice === "paper") ? "you win!" :"you lose!";
                    break;
        }
    }

    playerDisplay.textContent = `Player: ${playerchoice}`;
    ComputerDisplay.textContent = `computer: ${computerchoice }`;
    resultDisplay.textContent = result;


}

    

