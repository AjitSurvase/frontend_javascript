// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and its resulting value.


//  Basic Promise Example


const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));



  //2: Promise with setTimeout


function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getData().then(data => console.log(data));




// Promise using Fetch API (REAL-WORLD)
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

 
  