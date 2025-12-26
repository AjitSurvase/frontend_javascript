var names="ABC";
let num=100;
const numbers=300;


//let num=400
function Demo()
{
   let num=200 //100=>200  //let shadowing
    console.log(num);
    
}

Demo();
num=300;
console.log(num); //100