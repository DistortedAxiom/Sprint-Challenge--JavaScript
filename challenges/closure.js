// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The nested function is able to access the variable "internal" due to the way scope works, any innner function can reference variables outside of it, but not the other way around.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(param) {
  for (var x = param - 1; x >= 1; x--) {
    param = param + x;
  }
  return param;
}

console.log(sumation(4));
