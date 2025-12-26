const prom=new Promise((resolve, reject) => {
   

    setTimeout(()=>
    {
      console.log("200:ok")
      
    },2000)

})

prom.then((v)=>
{
    console.log("first step");

    return (v);
    
})
// .then((v)=>
// {
//     console.log("second step");
//     return v;
    
// }).then((v)=>
// {
//     console.log("third step");
    
//     console.log(v);
    
// })

.catch((e)=>
{
    console.log(e);
    
})