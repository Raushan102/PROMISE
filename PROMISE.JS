// TODAY  I AM GOING TO LEAN PROMISE
// WHY WE USE PROMISE
// HOW
// PHYWALLA

// try =======>

let RightTovote = new Promise((resolve, reject) => {
  let age = 17;

  if (age >= 18) {
    resolve("ok you are  able for voting  ");
  } else {
    reject("you are not 18+  so are not able to vote");
  }
});

RightTovote.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("thanks you!");
  });

  /// some heavy task===================>


  

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



makecheese().then((cheese)=>
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
});