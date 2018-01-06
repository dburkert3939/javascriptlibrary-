//Interaction includes the browser functions: alert, prompt, and confirm

alert("Hello");

//is a modal window where the user must hit OK to continue interaction with the rest of the page

let age = prompt("How old are you?"); //prompt has you type in age

alert(`You are ${age} years old!`); //alert to finish the statement including age 

//The visitor may type something in the prompt input field and press OK. 
//Or they can cancel the input by pressing the CANCEL button or hitting the Esc key.

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

//Function confirm shows a modal window with a question and two buttons: OK and CANCEL.

let name = prompt("What is your name?", "");
alert(name);