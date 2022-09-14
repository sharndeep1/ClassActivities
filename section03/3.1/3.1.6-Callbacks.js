// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}
// let greeting = greet("sharn");
function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage(greet("sharn"));
getNameAndShowMessage(welcome("hargun"));
getNameAndShowMessage(informAboutSale("House"));
