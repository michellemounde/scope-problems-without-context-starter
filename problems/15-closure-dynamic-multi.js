/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:

***********************************************************************/

// your code here!
function dynamicMultiply(multiplier) {
  return function(num) {
    return num * multiplier;
  }
}

const doubler = dynamicMultiply(2); // returns a functions
console.log(doubler(5)); // returns 10

const tripler = dynamicMultiply(3);
console.log(tripler(5)); // returns 15

const multiplyByFive = dynamicMultiply(5);
console.log(multiplyByFive(5)); // returns 25

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = dynamicMultiply;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
