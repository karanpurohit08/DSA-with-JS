function additionOfElement(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += element;
  }
  return sum;
}
// console.log(additionOfElement([10, 20, 30]));

function findTheMaxElement(arr) {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) max = element;
  }
  return max;
}
// console.log(findTheMaxElement([10, 30, 40, 20, 0]));

function secondMaxNumber(arr) {
  if (arr.length < 2) return null;
  let max = -Infinity;
  let secondMax = -Infinity;
  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}
// console.log(secondMaxNumber([20, 20, 20, 20, 20, 15]));

function reverseArr(arr) {
  for (let index = 0; index < Math.floor(arr.length / 2); index++) {
    [arr[index], arr[arr.length - 1 - index]] = [
      arr[arr.length - 1 - index],
      arr[index],
    ];
  }
  return arr;
}
// console.log(reverseArr([1, 2, 3, 4, 5]));

function everyZeroOnLeftAndOneOnRight(array) {
  let i = 0;
  let j = 0;
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     if (element) {
  //       i++;
  //     } else {
  //       [array[i], array[j]] = [array[j], array[i]];
  //       i++;
  //       j++;
  //     }
  //   }
  while (i < array.length) {
    if (array[i] == 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
    i++;
  }
  return array;
}
// console.log(everyZeroOnLeftAndOneOnRight([0, 1, 0, 1, 1, 0]));
// Using two pointer theory(Here i will search for that value which is going to be at the left side and replace it's postion with j and move ahead...)
