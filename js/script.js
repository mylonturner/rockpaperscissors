// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userInput;


// DOCUMENT READY FUNCTION (BELOW
$(document).ready(function(){

    $("#shoot").click(function(){
        userInput = $("#input").val();
        console.log(userInput);
        $("#userChoice").text(userInput);
    });
});