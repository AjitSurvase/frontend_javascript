// let object=1;

// console.log(object);


let student= {
    name:"Ajit",
    email:"ajit@123",
    num:"12345",

  


getnames:function ()
{
    return this.names;
}


}
console.log(student);
console.log(delete student.email);
console.log(student);   //after deleteing

student.city="pune";

console.log(student.city);

console.log(student);
console.log(student["city"]);