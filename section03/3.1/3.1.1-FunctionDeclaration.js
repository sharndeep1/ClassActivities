// TODO: using the function expressions below, refactor them into function declarations
const greet = function() {
  console.log("Hello!");
};
// Refactored function greet ()
  function greet(){
  console.log("Hello!");
};
//greet();

//threeModTwo function expression
const threeModTwo = function() {
  console.log(3 % 2);
};

// Refactored function...
function threeModTwo() {
  console.log(3 % 2);
};


// checkDrivingFunction
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
   console.log(false);
  }
};
let sum=0;
function numsum(a,b){
sum =a+b;
}
