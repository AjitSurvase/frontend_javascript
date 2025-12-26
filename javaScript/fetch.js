

const prom=fetch("https://dummyjson.com/todos");

prom.then((v)=>
{
   return v.json();
   
 })
.then((v)=>
{
   let getdat=new Array(v.todos);

   getdat.forEach((i)=>
   {

     i.forEach((j)=>
     {
        if(j.completed==true)
        {
            console.log(j);
            console.log("***************");
            
        }else{
            console.log("status false");
            
        }

} )
  
})
   
})

.catch((e)=>
{
   console.log(e);
   
})
