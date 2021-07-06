/*Arrays for O and X moves*/

var O_moves = []; 
var X_moves = []; 

/* upon loading the page initialize X to start and clear the board and scoreboard*/
window.onload = function(){
   reset(); 
}

function userMove(userSquare){
    //clear the error if there is one
    document.getElementById("error_message").innerHTML = ""; 

    //check if the square is already taken, if so return error and have them click
    //on a different square 
    if(X_moves.includes(userSquare) || O_moves.includes(userSquare)){
        document.getElementById("error_message").innerHTML = "Square is already taken. Choose another.";
        return; 
    }

    //first check whose turn it is
    var userTurn = document.getElementById("display_player").textContent; 

    //if it's X, mark the square with X and push the square to X's array
    if(userTurn == "X"){
        document.getElementById(userSquare).innerHTML = "X"; 
        X_moves.push(userSquare); 

        //output that it's O's turn and return
        document.getElementById("display_player").innerHTML = "O"; 
    }
    else {
        document.getElementById(userSquare).innerHTML = "O"; 
        O_moves.push(userSquare); 

        //output that it's X's turn and return
        document.getElementById("display_player").innerHTML = "X"; 
    }

     //check if the game has been won
     var isWin = win(); 
     
     if(isWin){
         return; 
     }
     else{
         tie();
     }
     
}

//resets the scoreboard and the board
function reset(){
    //reset the arrays to empty
    O_moves = []; 
    X_moves = []; 

    //reset board
    var i; 
    for(i = 0; i < 9; i++){
        document.getElementsByClassName("xo")[i].innerHTML = ""; 
    }

    //start the game off with X
    document.getElementById("display_player").innerHTML = "X";

    //reset scores
    document.getElementById("x_score").innerHTML = "0"; 
    document.getElementById("o_score").innerHTML = "0";     

}

//all this does is reset the board
function new_game(){
    //reset board
    var i; 
    for(i = 0; i < 9; i++){
        document.getElementsByClassName("xo")[i].innerHTML = ""; 
    }
    
    //Must reset the arrays too
    O_moves = []; 
    X_moves = []; 

    document.getElementById("display_player").innerHTML = "X";

    //Clear error message
    document.getElementById("error_message").innerHTML = ""; 



}

//TODO: Function to check if the game has ended(all squares are occupied)
//If it ends without a winner it's a tie
//Probably use a listener to constantly check 

function tie() {
    var total_moves = O_moves.concat(X_moves);
    if (total_moves.length == 9) {
        new_game();
    }
    else {
        return;
    }
}

//TODO: Function to check if either X or O wins 
/*Possible win combinations(in any order): 

1,2,3
4,5,6
7,8,9
1,4,7
2,5,8
3,6,9
1,5,9
3,5,7

use arrayName.include("one") to check if an element exists in the array
*/

function win() {
    var won = 0;
    // Check if player won first row
    if ( (O_moves.includes("one") && O_moves.includes("two") && O_moves.includes("three")) || (X_moves.includes("one") && X_moves.includes("two") && X_moves.includes("three")) ) {
        if (O_moves.includes("one")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;
    }
    // Check if player won second row
    else if ((O_moves.includes("four") && O_moves.includes("five") && O_moves.includes("six")) || (X_moves.includes("four") && X_moves.includes("five") && X_moves.includes("six")) ) {
        if (O_moves.includes("four")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;    
    }
    // Check if player won third row
    else if ((O_moves.includes("seven") && O_moves.includes("eight") && O_moves.includes("nine")) || (X_moves.includes("seven") && X_moves.includes("eight") && X_moves.includes("nine")) ) {
        if (O_moves.includes("seven")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;
    }
    // Check if player won first column
    else if ((O_moves.includes("one") && O_moves.includes("four") && O_moves.includes("seven")) || (X_moves.includes("one") && X_moves.includes("four") && X_moves.includes("seven")) ) {
        if (O_moves.includes("one")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;    
    }
    // Check if player won second column
    else if ((O_moves.includes("two") && O_moves.includes("five") && O_moves.includes("eight")) || (X_moves.includes("two") && X_moves.includes("five") && X_moves.includes("eight")) ) {
        if (O_moves.includes("two")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;    
    }
    // Check if player won third column
    else if ((O_moves.includes("three") && O_moves.includes("six") && O_moves.includes("nine")) || (X_moves.includes("three") && X_moves.includes("six") && X_moves.includes("nine")) ) {
        if (O_moves.includes("three")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;    
    }
    // Check if player won diagonally (-x)
    else if ((O_moves.includes("one") && O_moves.includes("five") && O_moves.includes("nine")) || (X_moves.includes("one") && X_moves.includes("five") && X_moves.includes("nine")) ) {
        if (O_moves.includes("one")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;    
    }
    // Check if player won diagonally (x)
    else if ((O_moves.includes("three") && O_moves.includes("five") && O_moves.includes("seven")) || (X_moves.includes("three") && X_moves.includes("five") && X_moves.includes("seven")) ) {
        if (O_moves.includes("three")) {
            var o_ans = document.getElementById("o_score").textContent;
            var new_o_ans = (+o_ans) + (+1);
            document.getElementById("o_score").innerHTML = new_o_ans;
        }
        else {
            var x_ans = document.getElementById("x_score").textContent;
            var new_x_ans = (+x_ans) + (+1);
            document.getElementById("x_score").innerHTML = new_x_ans;
        }
        won = 1;    
    }
    
    // If player won, restart game
    if (won == 1) {
        new_game();
    }

    return won; 
}