const prom=Promise.resolve(100);

prom.then((v)=>
{
    console.log("success");
})