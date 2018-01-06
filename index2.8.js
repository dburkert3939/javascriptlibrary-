//Equality check is written as a == b, just an a = b has = be an assignment
// not equals is shown as a != b

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

//String comparions use the dictionary order

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

//A strict equality operator === checks the equality without type conversion.

alert( 0 == false ); // true, 0 and false can't differ with regular equality check 
alert( 0 === false ); // false, because the types are different

5 > 4; true
"apple" > "pineapple", false p > a
"2" > "12", true compares 2 > 1
undefined == null, true
undefined === null, false
null == "\n0\n", false
null === +"\n0\n", false