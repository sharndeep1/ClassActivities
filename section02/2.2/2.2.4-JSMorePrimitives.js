// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const dogName = "Bravy";
let dogAge = 1;
let gremlinfactor =  false;
let spayAge = null;
let relationshipType;
// print the type of each variable in this order:
console.log(
typeof dogName,
typeof dogAge,
typeof gremlinFactor,
typeof spayAge,
typeof relationshipType
);
// string, number, boolean, undefined, null

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let dogInfo = `The dog's name is ${dogName} and he is ${dogAge} year old.`;
console.log(dogInfo);


// reassign the value of the variable that references "null"
spayAge = 1.5;
// print the value and its type
console.log(spayAge);
console.log(typeof spayAge);
// print a variable that causes a ReferenceError
//console.log(catName);
// alter the previous line to no longer cause a ReferenceError
let catName;
console.log(catName);
