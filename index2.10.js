if ("0") {
    alert( 'Hello' );
  }

//yes will run because "0" is a script, if no quotes and just 0 then no it won't run

let answer = prompt('What is the "offical" name of Javascript?','');

if (name == 'EMCAScript') {
  alert('Right!');
} else {
  alert('You dont know. EMCAScript!');
}

//solution used value instead of answer, please note

let num = prompt('Please enter a number','');

if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

//input is always in a number in this example

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == null) {
    alert( 'Canceled.' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

//rewrite an if statement using a ternary operator

if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }

  result = (a + b < 4) ? 'Below' : 'Over';

