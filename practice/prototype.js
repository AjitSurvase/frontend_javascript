//🔹 What is Prototype in JavaScript?

// Prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.


function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

const p1 = new Person("Ajit");
const p2 = new Person("shivam");
const p3 = new Person("mahesh");


p1.sayHello(); // Hello Ajit
p2.sayHello(); // Hello Rahul
p3.sayHello();