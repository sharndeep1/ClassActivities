// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "morning";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting  = `Good ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVariable;

// Print the new variable and its type
console.log(typeof(newVariable));
// What type should we expect?
//undefined
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
 newVariable = " ";
// Print the variable and its type again
console.log(typeof(newVariable));
// What type should we expect?

// string
// Try to print a variable that does not exist
// What should we expect to print in the CLI?

// Print "greeting" again
console.log(greeting);
// Will this line run?
//yes
