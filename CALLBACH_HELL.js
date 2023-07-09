// lets see what is callback  hell

//====>question for i have to make a pizza for that we need pizza->dough->cheese ===>

function makeCHeese(callbackForCheese) {
  setTimeout(() => {
    let cheeese = "🧀";

    callbackForCheese(cheeese);
  }, 3000);
}
function makeDough(cheese, callbackForDough) {
  setTimeout(() => {
    let dough = cheese + "🍩";

    callbackForDough(dough);
  }, 3000);
}

function makepizza(dough, callbackForPizza) {
  setTimeout(() => {
    let pizza = dough + "🍕";

    callbackForPizza(pizza);
  });
}

//====================> calling function=========>

makeCHeese((cheese) => {
  console.log("i got cheese"+cheese);

  makeDough(cheese, (dough) => {
    console.log("i got dough"+dough);

    makepizza(dough, (pizza) => {
      console.log("wow i got pizza"+pizza);
    });
  });
});
