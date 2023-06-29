// We want to give a prompt to the user that lets them enter Rock, Paper, or Scissors
// We randomly generate an opponent's move
// We tell the player our move, and whether they won, tied or lost
// We display their score for this session
// We offer another round

function playGame{
    var playerWins;
    var playerLosses;
    var playerTies;
    var playerMove;
    var computerMove;

    var possibleMoves = ["Rock", "Paper", "Scissors"];

    function getRandomInt(){
        //generate either 0, 1, or 2
        return Math.floor(Math.random() * (3));
    }

    while(1){
        playerMove = prompt("Please enter your choice below (Must be Rock, Paper, or Scissors)");
        computerMove = possibleMoves[getRandomInt]
        // if playermove === computermove, TIE
        if (){

        }
        //if player hits 'cancel', break loop
    }
}