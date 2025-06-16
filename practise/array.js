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

function placeLetterAtLeft(arr) {
  let copy = arr[0];
  for (let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + 1];
  }
  arr[arr.length - 1] = copy;
  return arr;
}
// console.log(placeLetterAtLeft([1, 2, 3, 4, 5]));

function placeLetterAtRight(arr) {
  let copy = arr[arr.length - 1];
  for (let index = arr.length - 1; index > 0; index--) {
    arr[index] = arr[index - 1];
  }
  arr[0] = copy;
  return arr;
}
// console.log(placeLetterAtRight([1, 2, 3, 4])); If for the k time then use loop upto the k%arr.length for kth rotation

function placeLetterAtLeftForKthTime(arr, k) {
  let kthPostion = k % arr.length;
  reverArr(0, kthPostion - 1);
  reverArr(kthPostion, arr.length - 1);
  reverArr(0, arr.length - 1);
  function reverArr(i, j) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr;
}
// console.log(placeLetterAtLeftForKthTime([1, 2, 3, 4, 5], 2));

function placeLetterAtRightForKthTime(arr, k) {
  let kthPostion = k % arr.length;
  reverArr(0, arr.length - 1);
  reverArr(0, kthPostion - 1);
  reverArr(kthPostion, arr.length - 1);
  function reverArr(i, j) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr;
}
// console.log(placeLetterAtRightForKthTime([1, 2, 3, 4, 5], 2));

function removeDuplicatesFromSortedArr(arr) {
  let j = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[j] = arr[i + 1];
      j++;
    }
  }
  return j;
}
// console.log(removeDuplicatesFromSortedArr([0, 1, 2, 3, 3, 4]));

function mergeTwoSortedArrays(arr1, arr2) {
  const newArrLength = arr1.length + arr2.length;
  let newSortedArr = new Array(newArrLength);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newSortedArr[k++] = arr1[i++];
    } else {
      newSortedArr[k++] = arr2[j++];
    }
  }
  while (j < arr2.length) {
    newSortedArr[k++] = arr2[j++];
  }
  while (i < arr1.length) {
    newSortedArr[k++] = arr1[i++];
  }
  return newSortedArr;
}
// console.log(mergeTwoSortedArrays([2, 4], [1, 3, 5]));

function buyStocksForMaxPrice(arr) {
  let maxProfit = 0;
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    } else {
      let def = arr[index] - min;
      maxProfit = Math.max(def, maxProfit);
    }
  }
  return maxProfit;
}
// console.log(buyStocksForMaxPrice([7,1,5,3,6,4]))

function majorityElement(arr) {
  let ans = arr[0];
  let count = 1;
  for (let index = 0; index < arr.length; index++) {
    if (count == 0) {
      ans = arr[index];
      count = 1;
    } else if (arr[index] == ans) count++;
    else count--;
  }
  return ans;
}
// console.log(majorityElement([2, 1, 2, 3, 3, 3]));

//splice method-used to delete certain element from certain index
//slice method- retuns the copy of an array

// const arr = [1, 2, 3, 4, 5, 6];
// const slice = arr.slice(2, 3);
// console.log(slice, "slice");
// console.log(arr, "arr");
