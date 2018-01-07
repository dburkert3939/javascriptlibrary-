function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }

  //using a ternary operator ?

  function checkAge(age) {
      return (age > 18 ? true : confirm('Did you get permission?');
  }

  //using an AND ||

  function checkAge(age) {
      return (age > 18) || confirm('Did you get permission?');
  }

  //return lowest value
  function min(a, b) {
    return a < b ? a : b;
  }

  //Write a function pow(x,n) that returns x in power n. Or, in other words, 
  //multiplies x by itself n times and returns the result.

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n <= 1) {
    alert(`Power ${n} is not supported,
      use an integer greater than 0`);
  } else {
    alert( pow(x, n) );
  }