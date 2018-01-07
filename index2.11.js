//There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

//Logical OR example ||

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

//Logical AND example &&
//AND returns the first falsy value or the last value if none were found.

alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one

//Logical !(NOT) example

alert( !true ); // false
alert( !0 ); // true

//Task from the website

alert( null || 2 || undefined ); // answer 2 the first true one
alert( alert(1) || 2 || alert(3) ); //answer 1 and then 2, doesn't evaluate the last alert(3)
alert( 1 && null && 2 ); //null since is the first false 
alert( null || 2 && 3 || 4 ); //answer 3 since && is done first and 3 is now in the middle, first true is 3

if (age >= 14 && age <= 90);//age is between 14 and 90 inclusively

if (!(age >= 14 && age <= 90))//using ! for age NOT between 14 and 90
if (age < 14 || age > 90)//another way to do it
