function factorialFunction(n) {
  var factorial = 1;
  if (n == "0" || n == "1") return factorial;
  while (n > 1) {
    factorial *= n--;
  }
  return factorial;
}
// console.log(factorialFunction(5));

function factorFunction(n) {
  let arr = [];
  for (let index = 1; index <= Math.floor(n / 2); index++) {
    if (n % index === 0) arr.push(index);
    else continue;
  }
  arr.push(n);
  return arr;
}
// console.log(factorFunction(9));

function checkPrimeNum(n) {
  let isPrime = true;
  if (n <= 1) return "Not a prime number";
  if (n % 2 === 0) return "Not a prime number";
  for (let index = 3; index <= Math.floor(Math.sqrt(n)); index += 2) {
    if (n % index === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime ? "It is a Prime number" : "Not a prime number";
}
// console.log(checkPrimeNum(1));

function strongNumber(n) {
  let sum = 0;
  var copy = n;
  if (n > 0) {
    while (n > 0) {
      let reminder = n % 10;
      let factorial = 1;
      while (reminder >= 1) {
        factorial *= reminder--;
      }
      sum = sum + factorial;
      n = Math.floor(n / 10);
    }
  }
  if (copy == sum) {
    return "Strong Number";
  } else {
    return "Not a Strong Number";
  }
}
// console.log(strongNumber(145));
