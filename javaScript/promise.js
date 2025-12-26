const prom=new Promise((resolve, reject) => {
   
    setTimeout(()=>{
  let salary=100;

   if(salary>99)
   {
    resolve("happy");
   }
   reject("sad");

    }, 2000);
})


prom.then((a)=>{

console.log(a);

})
.catch((b)=>{

console.log(b);


})
.finally(()=>{

console.log("done");


});