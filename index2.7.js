let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
// a,b,c all equal 3 and d equals 1

let a = 2;

let x = 1 + (a *= 2);

// a = 4 and x = 5 after running the code

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4) it ignores anything before the comma and runs last operation

alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2