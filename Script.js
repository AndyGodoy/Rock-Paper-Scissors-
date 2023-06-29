// We want to give a prompt to the user that lets them enter Rock, Paper, or Scissors
// We randomly generate an opponent's move
// We tell the player our move, and whether they won, tied or lost
// We display their score for this session
// We offer another round

function playGame{
    var playerWins = 0;
    var playerLosses = 0;
    var playerTies = 0;
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
        if (playerMove === computerMove){
            playerTies++;
            alert(We tied!);
            return;
        }
        if (playerMove === "Rock"){
            if (computerMove === "Scissors"){
                //player wins
            }
            else{
                //player loses
            }
        }
        if (playerMove === "Paper"){
            if (computerMove === "Rock"){
                //player wins
            }
            else{
                //player loses
            }
        }
        if (playerMove === "Scissors"){
            if (computerMove === "Paper"){
                //player wins
            }
            else{
                //player loses
            }
        }

        // alert that tells them their win/loss/tie count
        alert("Wins: " + playerWins + "Losses: " + playerLosses + "Ties: " + playerTies);
        //if player hits 'cancel', break loop
    }
}