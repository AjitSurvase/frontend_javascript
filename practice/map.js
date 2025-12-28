
// map() – Transform each element
// map is used to transform each element of an array and returns a new array of the same length.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]


console.log("**********************");

//  2️⃣ filter() – Select elements based on condition
// filter is used to select elements from an array based on a condition.

const numbers1 = [1, 2, 3, 4, 5];

const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

console.log("**********************");



//3️⃣ reduce() – Combine elements into a single value
// reduce is used to reduce an array into a single value by applying a function
const numbers3 = [1, 2, 3, 4];

const sum = numbers3.reduce((total, num) => total + num, 0);   //0 is a intial value...

console.log(sum); // 10
