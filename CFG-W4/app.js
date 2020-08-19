


function GuessTest(){

var usernum = document.forms.NumGuess.usernm.value; /* stores the value that user inputs in form into a variable usernum */
var randnum = Math.floor(Math.random() * 2) + 1; /* randomly generates a number between 1 and 2*/


if (usernum == randnum) /* conditional to check whether values stored in each variable are equal*/
{
    alert("Correct! You win");

}else{
    alert("Wrong! You loose");
}


}

