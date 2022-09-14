const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
console.log(firstA);
//0
let firstB = arr.indexOf("b");
console.log(firstB);
//2
 let firstC = arr.indexOf("c");
console.log(firstC);
//4
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
console.log(lastA);
//6
let lastB = arr.lastIndexOf("b");
console.log(lastB);
//8
let lastC = arr.lastIndexOf("c");
console.log(lastC);
//11
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(arr,duplicateValue){
  let firstIndex = arr.indexOf(duplicateValue);
  let  lastIndex = arr.lastIndexOf(duplicateValue);
while(firstIndex !== lastIndex) {
arr.splice(lastIndex,1);
lastIndex = arr.lastIndexOf(duplicateValue);

}
return arr;

}

console.log(removeDuplicates(arr,"a"));
console.log(removeDuplicates(arr,"b"));
console.log(removeDuplicates(arr,"c"));


// For "a" here are the cycles through the loop
//    first a = 0, last a = 6 (not equal)
//    first a = 0, last a = 3 (not equal)
//    first a = 0, last a = 1 (not equal)
//    first a = 0, last a = 0 (Yes! Equal!)
//  Loop exits


//ANother example...
const cat = ["g","h","i", "i", "y", "t","y", "h", "u","i","o","y","y", "h"];

console.log("\n The original cat array ...", cat);

console.log("\n Result after duplicate y's removed from array 'cat'... ", removeDuplicates(cat, "y"));

console.log("\n Result after duplicate i's removed from array 'cat'... ", removeDuplicates(cat, "i"));

console.log("\n Result after duplicate h's removed from array 'cat'... ", removeDuplicates(cat, "h"));
