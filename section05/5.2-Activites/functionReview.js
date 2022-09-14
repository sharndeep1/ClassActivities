// Activity 1

// 1.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together using the forEach method
//    Divide the sum by the number of parameters that were passed in
//    The function will print the result in the following string: `The <number of scores> scores resulted in an average of <result>`
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use

//Code below this line


function  testAverage(...scores) {
  let total =  0;
  scores.forEach(score => (total += score));
  let avg = total/scores.length;

  console.log(
    `The ${scores.length} scores resulted in an average of : ${avg}`
  );
  return avg;
}
// Invoke testAverage with the following parameters: 92, 71, 85, 83
testAverage(92,71,85,83);

// 1.b
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 80, print "<grade>, Enjoy your summer!" then output false
//    if argument is greater than or equal to 60, print "<grade>, Extra studying required." then output true
//    if argument is less than 60, print "<grade>, Failed" then output true

// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before

function  gradeCheck(scoreAverage){


  if(scoreAverage >=80) {
console.log(`${scoreAverage}, Enjoy your summer!`);
return false;
  }
if (scoreAverage >=60) {
  console.log(`${scoreAverage},Extra studying required.`);
  return true;
  }
  if(scoreAverage < 60 ) {
  console.log(`${scoreAverage}, Failed`);
  return true;
  }

}

gradeCheck(testAverage(92,71,85,83));

// Declare a function called summerPlans
//  These are the requirements of the function:
//    Accepts two parameters: name and outcome (result will be passed as an argument through outcome)
//    Inside the function, create an object called student
//    this object will have two properties with keys name and school
//    set the value of the name key to be the name parameter
//    set the value of the school key to be the outcome parameter
//    set up an if conditional that examines if outcome is true/false
//    if true, print "<student name>'s will be attending summer school."
//    if false, print "<student name>'s will be going on vacation this summer!"
// Hint, you will need to utilize both dot notation and template literals to properly set up these conditions and what they print

// Invoke summerPlans with a name of your choice and the result variable
let scores;
function  summerPlans(studentName,outcome) {
const  student = {
    name: studentName,
    school: outcome
}

if ( student.school == true) {
  console.log(`${student.name} will be attending summer school.`);
}
if(student.school== false){
  console.log(`${student.name} will be going on vacation this summer!"
  `);
}
}
// Invoking in One Line
summerPlans("sharn",gradeCheck(testAverage(92,71,85,83)));

// Saving Returned values to variables, passing one variable at a time
let testAvg = testAverage(75);

let grade = gradeCheck(testAvg);

summerPlans("Steve", grade);









