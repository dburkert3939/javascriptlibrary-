let i = 3;

while (i) {
  alert( i-- );
}
//last alert code will be 1, it will start 3,2,1 then end

let i = 0;
while (++i < 5) alert( i );
//shows values 1,2,3, and 4. no 5 because while 5 < 5 fails, the loop stops

let i = 0;
while (i++ < 5) alert( i );
//shows values 1,2,3,4 and 5. it includes 5 because 5<5 is false and shows the last value

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

//prefix or postfix in this example doesn't matter and both show 0,1,2,3,4

//Use the for loop to output even numbers from 2 to 10.

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

  //change from for loop to while
  for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

  let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}


