let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


options.forEach((option) =>{  
    option.addEventListener("click", () => {
        let userOption = option.getAttribute("id")
        playGame(userOption)
    });
});



let drowGame = () => {
    console.log("Its a Drow")
    msg.innerHTML = "It's a drow, Play Again🔁"
}

let genCompOption = () => {
    const opt = ["rock", "paper", "scissors"]
    let optIndex = Math.floor(Math.random() * 3)
    return opt[optIndex];
}

let showWinner = (userOption,compOption,userWin) => {
    if(userWin){
        console.log("User Win");
        msg.innerHTML = "User Win 🏆"
        userScore++
        userScorePara.innerHTML = userScore
    }
    else{
        console.log("Computer Win");
        msg.innerHTML = "Computer Win 🤖"
        compScore++
        compScorePara.innerHTML = compScore

    }
}
const playGame = (userOption)=>{
    console.log(userOption);
    // Generate Computer option
    let compOption = genCompOption()
    console.log(compOption);

    if(userOption === compOption){
        drowGame() 
    }
    else{
        let userWin;
        if(userOption === "rock"){
            if(compOption === "paper"){
                userWin = false
            }
            else{
                userWin = true
            }
        }
        else if(userOption === "paper"){
            if(compOption === "scissors"){
                userWin = false
            }
            else{
                userWin = true
            }
        }
        else{
            if(compOption === "rock"){
                userWin = false
            }
            else{
                userWin = true
            }
        }
        console.log(userWin);
        showWinner(userOption,compOption,userWin)
    }

}