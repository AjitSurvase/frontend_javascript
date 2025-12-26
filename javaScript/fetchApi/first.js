const prom=fetch("https://dummyjson.com/todos")

prom.then((v)=>
  v.json()
).then((v)=>
{
    console.log(v);
    
}).catch(e=>
{
    console.log(e);
    
}
)