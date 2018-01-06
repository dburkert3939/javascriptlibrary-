let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
//String conversion happens when we need the string form of a value

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

"" + 1 + 0  //10
"" - 1 + 0  //-1
true + false  //1
6 / "3"  //2
"2" * "3"  //6
4 + 5 + "px"  //45px
"$" + 4 + 5  //$45
"4" - 2  //2
"4px" - 2  //NaN
7 / 0  //infinity
"  -9\n" + 5 //-9\n5
"  -9\n" - 5 //-14
null + 1  //1
undefined + 1  //NaN