const nums = [6, 5, 2, 3, 4, 1, 0];
console.log("Original nums",nums);

// remove each of the last two items with pop(), saving each item to a variable
let popReturn1 = nums.pop();//0
//console.log(popReturn1);
let popReturn2 =nums.pop();//1
//console.log(popReturns2);
//console.log(nums);
console.log("PopReturn1...", popReturn1, "PopReturn2...", popReturn2, "Nums...", nums);


// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn1 = nums.shift();//6
let shiftReturn2 = nums.shift();//5
console.log("ShiftReturn1...", shiftReturn1, "ShiftReturn2...", shiftReturn2, "Nums...", nums);

console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6

/*let numPush= nums.push(6);
console.log(numPush);

let numUnshift = nums.unshift(0);
console.log(numUnshift);

console.log(nums);*/

nums.push(shiftReturn2, shiftReturn1);
nums.unshift(popReturn1, popReturn2);

console.log("New Nums after using unshift and push ...", nums);
