//Promises: On object representing the eventual completion and failure of an asynchronous operations
// Promise=> 1.Success- resolve(fulfilled) or 2.Failure- reject(rejected)
const GITHUB_API = "https://api.github.com/users/akshaysaini7";
const user = fetch(GITHUB_API);
// console.log(user, "user");

//Here createOrder is an async function as it returns a promise
function createOrder() {
  const pr = new Promise((resolve, reject) => {
    const a = "Order has been created with Id:102!";
    setTimeout(() => {
      resolve(a);
    }, 1000);
  });
  return pr;
}
createOrder()
  .then((orderId) => {
    return orderId;
  })
  .then((orderId) => {
    return ProceedToPayment(orderId);
  })
  .then((proceed) => {
    // console.log(proceed);
  })
  .catch((error) => {
    console.log("error: ", error.message);
  }); // this catch any of above error

function ProceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("Payment successfull!");
    }
    reject("OrderId not found");
  });
}

function p1() {
  return new Promise((resolve, reject) => {
    reject("P1 resoved!");
  });
}
function p2() {
  return new Promise((resolve, reject) => {
    reject("P2 rejected!");
  });
}
function p3() {
  return new Promise((resolve, reject) => {
    reject("P3 resoved!");
  });
}

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 resolved");
  }, 5000);
});
p4.then((result) => {
  // console.log(result);
}).catch((err) => {
  console.log(err, "err in p4");
});
// try {
//   const result = await p4;
//   console.log(result, "result");
// } catch (error) {
//   console.log(error, "error in p4");
// }

try {
  const result = await Promise.any([p1(), p2(), p3()]);
  console.log(result, "result");
} catch (error) {
  // console.log(error.errors, "error in catch");
}

//Promise.all- Takes an array of a promises as an input and resolve each one of them and return an array of result.
//Promise.all([p1,p2,p3])=>[v1,v2,v3]
// - it will wait for all for all of the promises to be resolved and then returns a resultant array
// - if it founds any error at any of the promises it will quicky returns the array and don't resolve the other promises

//Promise.allSettled([p1,p2,p3])=>[v1,err2,v3]
// - it will wait for every promise to settled even if it encounters any promise as a failure.

//Promise.race([p1,p2,p3])=> will result whoever settled the first, whether it is resolved or rejected

//Promise.any([p1,p2,p3])=> will result whoever resolvec the first, not the one who settled the first
// basically it waits for success
// If all the promises fails then it will return an aggregated errors(Aggregate Error) array([err1,err2,ee3])

//Async Function: If a returned value is promise then it will return that promise otherwise it will wrapped up that value(Whether it is string, int, boolean etc.) into the promise and return it.

// await- JS Engine waits over there to resolved the promise
// async-await combo used to handle the promises

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been resolved.");
  }, 10000);
});

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise has been resolved");
    }, millis);
  });
}
// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t, "final result"));

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  return function () {
    clearInterval(timer);
  };
};
// const result = [];
// const fn = (x) => x * 5;
// const args = [2],
//   t = 100,
//   cancelTimeMs = 50;
// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelTimeMs);
// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result, "result"); // [{"time":20,"returned":10}]
// }, maxT + 15);

var timeLimit = (fn, t) => {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Race the original function against the timeout
    return Promise.race([
      fn(...args), // Execute the original function
      timeoutPromise, // Timeout promise
    ]);
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
const inputs = [5];
const t = 150;

const limited = timeLimit(fn, t);
const start = performance.now();
let result;
try {
  const res = await limited(...inputs);
  result = { resolved: res, time: Math.floor(performance.now() - start) };
} catch (err) {
  result = { rejected: err, time: Math.floor(performance.now() - start) };
}
// console.log(result);

setTimeout(function b() {
  // console.log("called at 0th seconds");
}, 0);

const pr1 = new Promise((resolve, reject) => {
  // resolve("It will be called in the micro task queue.");
}).then(function b(value) {
  console.log(value);
});

// console.log("called out side the setTimeout..");
