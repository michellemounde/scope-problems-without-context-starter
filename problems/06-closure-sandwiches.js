/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:



Another Sandwich:

***********************************************************************/

// your code here!
function sandwichMaker() {
  let order = "One sandwich with tomato"

  return function (filling) {
    order = order + " and " + filling;
    return order;
  }
}


let sandwich = sandwichMaker(); // => returns a function
console.log(typeof sandwich);
sandwich("spinach"); // => "One sandwich with tomato and spinach"
sandwich("jelly"); // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")); // => "One sandwich with tomato and spinach and jelly and bread"

let sandwich2 = sandwichMaker(); // => returns a function
console.log(sandwich2("pb")); // => "One sandwich with tomato and pb"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
