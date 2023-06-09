//opening/title
const welcome = document.getElementById("welcome");
const title = document.getElementById("title");

//scorecard
const wallDiv = document.getElementById("wallDiv");
const wall = document.getElementById("wall");

//bottles
const bottle1 = document.getElementById("bottle1");
const bottle2 = document.getElementById("bottle2");
const bottle3 = document.getElementById("bottle3");
const bottle4 = document.getElementById("bottle4");
const bottle5 = document.getElementById("bottle5");
const bottle6 = document.getElementById("bottle6");
const bottle7 = document.getElementById("bottle7");
const bottle8 = document.getElementById("bottle8");
const bottle9 = document.getElementById("bottle9");
const bottle10 = document.getElementById("bottle10");
const bottle11 = document.getElementById("bottle11");
const bottle12 = document.getElementById("bottle12");
const bottle13 = document.getElementById("bottle13");
const bottle14 = document.getElementById("bottle14");
const bottle15 = document.getElementById("bottle15");
const bottle16 = document.getElementById("bottle16");
const bottle17 = document.getElementById("bottle17");
const bottle18 = document.getElementById("bottle18");
const bottle19 = document.getElementById("bottle19");
const bottle20 = document.getElementById("bottle20");
const broken = document.getElementById("broken");
const bottles = [bottle1, bottle2, bottle3, bottle4, bottle5, bottle6, bottle7, bottle8, bottle9, bottle10, bottle11, bottle12, bottle13, bottle14, bottle15, bottle16, bottle17, bottle18, bottle19, bottle20];

//game variables
const mainGame = document.getElementById("mainGame");
const buttons = document.getElementById("buttons");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const playAgainBtn  = document.getElementById("playAgainBtn");
const rulesBtn  = document.getElementById("rulesBtn");
const xBtn  = document.getElementById("xBtn");
const points = 0;

//dice variables
const dice  = document.getElementById("dice");
const rolling = document.getElementById("rolling");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");

//footer variables
const playing = document.getElementById("playing");
const portfolio = document.getElementById("portfolio");
const thanks = document.getElementById("thanks");

//event listeners for buttons
rollBtn.addEventListener("click", () => {
    //activate gif to roll dice and land on random number
    let num = Math.floor(Math.random() * 6 +1);;
    (num == 1)?rolled(dice1, 1):(num == 2)?rolled(dice2, 2):(num == 3)?rolled(dice3, 3):(num == 4)?rolled(dice4, 4):(num == 5)?rolled(dice5, 5):rolled(dice6, 6);
});
function rolled(dice, num){
    dice.style.display = "block";
    points = points + num
    (points>=20)?bottle20.style.display = "inline":bottles[points].style.display = "inline";
}
resetBtn.addEventListener("click", () => {
    //reset game to start without welcome screen
});
playAgainBtn.addEventListener("click", () => {
    //offer choice to play again or not
    //restart game
});
rulesBtn.addEventListener("click", () => {
    rules.style.display = "block";
    rules.style.position = "absolute";
});
xBtn.addEventListener("click", () =>{
    rules.style.display = "none";
    rules.style.position = "inline";
});
// const buttons = document.getElementById("buttons");
// const rollBtn = document.getElementById("rollBtn");
// const resetBtn = document.getElementById("resetBtn");
// const playAgainBtn  = document.getElementById("playAgainBtn");

document.addEventListener("DOMContentLoaded", () => {
    welcome.style.marginTop = "5%";
    welcome.style.fontSize = "8px";
    title.style.fontSize = "24px";
    wallDiv.style.display = "flex"
});