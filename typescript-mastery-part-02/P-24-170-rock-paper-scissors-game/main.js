var player1 = "Rock";
var player2 = "Scissors";
if (player1 === player2) {
    console.log("It is a tie");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("Player1 wins");
}
else
    ("Player2 wins");
