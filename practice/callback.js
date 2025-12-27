
// A callback function is a function that is passed as an argument to another function and is executed later, after some operation is completed.


// in simple word function use as argument in another function

//Example 1: Basic Callback (SIMPLE)

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}

greet("Ajit", sayBye);



//  Example 2: Callback in setTimeout

setTimeout(function () {
  console.log("Executed after 2 seconds");
 }, 2000);



// Function executes after delay


// Example 3: Callback in Array Methods


const numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log(num);
});


//  Function passed as argument.



// 🔹 Example 4: Callback in API Call


// fetch(url, function (response) {
//   console.log(response);
// });


// Function runs after API response