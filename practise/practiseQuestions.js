const str = "Karan is a backend developer";
const reverseStr = str.split("").reverse().join("");
// console.log(reverseStr, "reverseStr");

const commaSeparatedString = "1,20,000";
const removedComma = commaSeparatedString.split(",").join("");
// console.log(removedComma, "removedComma");

const arr = [1, 2, 3, 4, 5];
arr.length = 0;
// console.log(arr, "arr");

const num = -20;
const isInteger = Number.isSafeInteger(num);
// console.log(isInteger, "isInteger");

function reverseNumber(num) {
  var reverseNum = 0;
  while (num > 0) {
    var reminder = num % 10;
    reverseNum = reverseNum * 10 + reminder;
    num = Math.floor(num / 10);
  }
  return reverseNum;
}
// console.log(reverseNumber(1234));

function PalChecker(str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
}
// console.log(PalChecker("poop"));

function sortByAlphabeticalOrder(str) {
  return str.split("").sort().join("");
}
// console.log(sortByAlphabeticalOrder("karan"));

function CaptalizeFirstLetter(str) {
  var allWords = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allWords.join(" ");
}
// console.log(CaptalizeFirstLetter("karan is here"));

function NumberOfOccurenceOfLetters(str) {
  const arr = str.split("");
  const Obj = arr.reduce((acc, value, array) => {
    if (acc.hasOwnProperty(value)) {
      acc[value] = acc[value] + 1;
    } else {
      acc[value] = 1;
    }
    return acc;
  }, {});
  return Obj;
}
// console.log(NumberOfOccurenceOfLetters("karan"));

function TotalOfNumbersInArray(array) {
  return array.reduce((acc, value, array) => {
    acc = acc + value;
    return acc;
  }, 0);
}
// console.log(TotalOfNumbersInArray([1, 2, 3, 4]));

function TotalOfNumbersInArrayOfStringAndNumbers(array) {
  return array.reduce((acc, value, array) => {
    if (typeof value == "number") {
      acc = acc + value;
      return acc;
    } else {
      return acc;
    }
  }, 0);
}
// console.log(
//   TotalOfNumbersInArrayOfStringAndNumbers(["karan", 2, 3, "karan", 5])
// );

const counting = {};
const countableString = "Hey i am here to stay for my own come back";

for (const char of countableString) {
  if (counting[char]) {
    counting[char] += 1;
  } else {
    counting[char] = 1;
  }
}

// console.log(counting, "counting");
