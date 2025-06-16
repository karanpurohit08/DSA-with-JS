function isPallindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let ans = true;
  while (i < j) {
    if (str[i] !== str[j]) {
      ans = false;
      break;
    }
    i++;
    j--;
  }
  return ans;
}
// console.log(isPallindrome("madam"), "isPallindrome");

function toggelEachChar(str) {
  let toggel = "";
  for (let index = 0; index < str.length; index++) {
    if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
      toggel += str[index].toLowerCase();
    } else if (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122) {
      toggel += str[index].toUpperCase();
    }
  }
  return toggel;
}
// console.log(toggelEachChar("AbE"));

function frequencyCount(str) {
  let newArr = new Array(128).fill(0);
  for (let index = 0; index < str.length; index++) {
    let ascaiiCode = str.charCodeAt(index);
    newArr[ascaiiCode] = newArr[ascaiiCode] + 1;
  }
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index] > 0) {
      console.log(
        `${String.fromCharCode(index)} is appeared ${newArr[index]} times`
      );
    }
  }
}
// frequencyCount("aabb");
