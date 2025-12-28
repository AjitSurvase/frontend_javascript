

async function getData() {
  return "Success";
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();

