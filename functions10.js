// 🌍 Global variable - can be used anywhere in the code
let globalCount = 0;

// 🧮 Function to add two numbers
function addNumbers(a, b) {
  // a and b are local variables (used only inside this function)
  let sum = a + b;
  return sum; // send result back to where the function was called
}

// 🙋 Function to say hello
function greet(name) {
  // name is also a local variable
  console.log("Hello, " + name + "!");
}

// 🔄 Function that shows global and local scope
function updateCount() {
  // This changes the global variable
  globalCount++;

  // This is a local variable (only works inside this function)
  let message = "You updated the count!";
  
  // Show both values
  console.log("Global Count is now:", globalCount);
  console.log("Message:", message);
}

// 🚀 Let's run the functions

console.log("Before updating, global count is:", globalCount);

let result = addNumbers(4, 6);     // call addNumbers with 4 and 6
console.log("Result of addNumbers:", result); // should print 10

greet("Aman"); // prints: Hello, Aman!

updateCount(); // increases globalCount to 1
updateCount(); // increases globalCount to 2

// ❌ This will give error if you try to use message outside updateCount()
// console.log(message); // Uncaught ReferenceError
