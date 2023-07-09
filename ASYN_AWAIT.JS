

function makecheese() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let cheese = "🧀";
        if (cheese) {
          resolve(cheese);
        } else {
          reject("cheese is not good");
        }
      }, 2000);
    });
  }

  function makedough(cheese)
  {
    return new Promise((resolve, reject) =>
    {

        setTimeout(()=>
        {
            let dough=cheese+"🍩";

            if(dough)
            {
               resolve(dough);
   
            }
            else{
               reject("dough is not good");
            }

        },2000)

        

    });

}

function makepizza(dough)
{
    return  new Promise((resolve, reject) =>
    {
        
        setTimeout(()=>
        {
            let pizza=dough+"🍕";

        if(pizza)
        {
            resolve(pizza);
        }
        else
        {
            console.log("dough is not good");
        }
        },2000)
        
    })
};



/* makecheese().then((cheese)=>
{
    console.log("oo  i got cheese"+cheese)

    return makedough(cheese);
}).then((dough)=>{
    console.log("oo in got dough"+dough);
    return makepizza(dough);
}).then((pizza)=>{
     console.log("wow finally we a pizza "+pizza)
}).catch((data)=>{
    console.log(data);
}); */

// there are another way  tp prevent  from chaining  that is asyn function name(params) {


async function orderpizza()
{

    try{let cheese=await makecheese();
    console.log("got cheese"+cheese);

    let dough=await makedough(cheese);
    console.log("got dough"+dough);

    let pizza=await makepizza(dough);
    console.log("finally we got pizza"+pizza);}catch(data)
    {  console.log(data);

    }


}
    
orderpizza();



