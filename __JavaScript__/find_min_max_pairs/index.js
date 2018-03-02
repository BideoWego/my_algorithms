

// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.


function findMinMaxPairs(array) {
  const pairs = [];
  array = array.sort((a, b) => a - b);
  const middle = Math.floor(array.length / 2);
  for (let i = 0, j = array.length - 1; i < middle; i++, j--) {
    const max = array[j];
    const min = array[i];
    pairs.push(max, min);
  }
  (array.length % 2 === 0) || pairs.push(array[middle]);
  return pairs;
}

(() => {
  const array = [15, 11, 10, 7, 12];
  const answer = [15, 7, 12, 10, 11];
  console.log(findMinMaxPairs(array), answer);
})();

(() => {
  const array = [15, 11, 7, 10];
  const answer = [15, 7, 11, 10];
  console.log(findMinMaxPairs(array), answer);
})();
