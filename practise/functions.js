/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  if (!functions.length) return 42;
  return function (x) {
    let returnVal = 0;
    const reverseArr = functions.reverse();
    reverseArr.map((value, index) => {
      if (!returnVal) {
        console.log("called for 0...");
        returnVal = value(x);
      } else {
        console.log("called for else if...");
        returnVal = value(returnVal);
      }
    });
    return returnVal;
  };
};

// const fn = compose([(x) => x - 3, (x) => x + 1, (x) => 2 * x]);

/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
  let calls = 0;
  return function (...args) {
    console.log(calls, "calls");
    calls++;
    if (calls > 1) return undefined;
    return fn(...args);
  };
};
// let fn = (a, b, c) => a * b * c;
// let onceFn = once(fn);

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

let i = 11;
// console.log(++i);
// console.log(i);
// console.log(Math.floor(-10.8));
// console.log(Math.trunc(-10.98));
// console.log(onceFn(5, 7, 4));
let numberOfDigit = 6;
const num = Math.trunc(
  Math.random() * 9 * Math.pow(10, numberOfDigit - 1) +
    Math.pow(10, numberOfDigit - 1)
);

const str = 11;
// console.log(num, "num");
const strNum = "2,50,000";
const newStr = strNum.split(",").join("");
// console.log(newStr, "newStr");
