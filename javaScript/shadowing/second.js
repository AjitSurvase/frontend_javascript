
var car="BMW";

let carname="Audi";

function printcar()
{
    let car="Mercedese";
    
   // let carname="Mustang";
    console.log("functional:",car);
    console.log("functional:",carname);

    if(true)
    {
      //  var carname="Safari"
        let carname="Wagonr";
        console.log(carname);
        
;
       if(true) {
        }
        console.log("block:",carname);
        
    }
    console.log("functional:",carname);
    
    
    
}
printcar();
console.log("global:",car);
console.log("global:",carname);
