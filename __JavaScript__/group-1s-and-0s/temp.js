


function groupOnesAndZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === 1) {
      arr.splice(i, 1);
      arr.unshift(num);
    }
  }
  return arr;
}


function inPlaceGroupOnesAndZeros(arr) {

  // Set a pointer to first/last index
  let left = 0;
  let right = arr.length - 1;

  // While there is distance
  // between the two pointers
  while (left < right) {

    // Get left value
    let a = arr[left];

    // If it is 0
    if (a === 0) {

      // Get right value
      b = arr[right];

      // Swap values
      arr[left] = b;
      arr[right] = a;

      // Only decrement
      // right index
      // because left
      // could be a 0 now
      right--;
    } else {

      // If left is a 1
      // increment left
      // to look at next
      // value
      left++;
    }
  }
  return arr;
}


console.log(
  groupOnesAndZeros([1, 0, 0, 0, 1, 1, 0, 1])
);
console.log(
  inPlaceGroupOnesAndZeros([1, 0, 0, 0, 1, 1, 0, 1])
);


const onesAndZeros = array => {
  let zeroIndex;
  array.forEach((num, index) => {
    if (num === 1 && zeroIndex < index) {
      [array[index], array[zeroIndex]] = [array[zeroIndex], array[index]];
      zeroIndex = index;
    }
    if (num === 0 && (!zeroIndex || zeroIndex > index)) {
      zeroIndex = index;
    }
  });
};
let test = [1, 0, 1, 0, 1, 0];
onesAndZeros(test);
console.log(test);

















