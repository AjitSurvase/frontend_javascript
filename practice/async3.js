//1️⃣ Difference between Promise and async/await
//Promise (older & chaining style)
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

getData()
  .then(result => console.log(result))
  .catch(error => console.log(error));



  
//async/await (modern & cleaner)
async function getData() {
  return "Success";
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();