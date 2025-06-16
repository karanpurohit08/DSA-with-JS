/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (!functions.length) return x;
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
// console.log(i++);
// console.log(i);
// console.log(Math.floor(-10.8));
// console.log(Math.trunc(-10.98));
// console.log(onceFn(5, 7, 4));
let numberOfDigit = 6;
const num = Math.trunc(
  Math.random() * 9 * Math.pow(10, numberOfDigit - 1) +
    Math.pow(10, numberOfDigit - 1)
);
// console.log(num, "num");

const strNum = "2,50,000";
const newStr = strNum.split(",").join("");
// console.log(newStr, "newStr");

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

var expect = function functionName(val) {
  return {
    toBe: function (value) {
      if (value === val) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (value) {
      if (value !== val) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};
// const objFun = expect(10);
// console.log(objFun.toBe(10));
// console.log(objFun.notToBe(5));

function createCounter2(init) {
  let n = init;
  return {
    increment: function () {
      return ++n;
    },
    decrement: function () {
      return --n;
    },
    reset: function () {
      n = init;
      return n;
    },
  };
}
/**
 * const counter = createCounter2(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const newArray = function (arr, fn) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const newElement = fn(element, index);
    newArr.push(newElement);
  }
  return newArr;
};

var filter = function (arr, fn) {
  let filteredArr;
  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i], i);
    if (val) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;
var reduce = function (nums, fn, init) {
  if (!nums.length) return init;
  for (let num = 0; num < nums.length; num++) {
    init = fn(init, nums[num]);
  }
  return init;
};
// console.log(reduce(nums, fn, init));

function fibonacciSeries(n) {
  let arr = [0, 1];
  for (let index = 2; index < n; index++) {
    const fibonacciNUmber = arr[index - 1] + arr[index - 2];
    arr.push(fibonacciNUmber);
  }
  return arr;
}
// console.log(fibonacciSeries(10));

function memoize(fn) {
  const catched = {};
  return function (...args) {
    const catchedKey = args.join(",");
    if (catchedKey in catched) return catched[catchedKey];
    const val = fn(...args);
    catched[catchedKey] = val;
    return val;
  };
}

let callCount = 0;
const sum = function (a, b) {
  callCount += 1;
  return a + b;
};
const memoizedFn = memoize(sum);
// memoizedFn(0, 0); // 5
// memoizedFn(0, 0); // 5
// memoizedFn(0, 0); // 5
// memoizedFn(0, 0); // 5
// console.log(callCount); // 1
