
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3


console.log("***********************");




function bankAccount(balance) {
  return function withdraw(amount) {
    balance -= amount;
    console.log("Remaining:", balance);
  };
}

const account = bankAccount(1000);
account(200); // 800
account(300); // 500



// 🔍 What’s happening?

// outer() runs once

// inner() keeps access to count

// count is remembered → closure   

