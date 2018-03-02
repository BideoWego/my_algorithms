

// Assume array is sorted
// If not, sort the array

function findMissingNumbers(arr) {
  let results = [];
  let last = 0;
  let expected = 0;
  let lastDifference = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current - last > 1) {
      let difference = current - last;
      results.push(last + difference);
      lastDifference = difference;
    } else {
      expected = current;
    }
    last = current;
    console.log(current, last, expected, lastDifference);
  }
  return results;
}

console.log(
  findMissingNumbers([1, 2, 2, 3, 6, 6, 7, 8, 9])
);

// Initialize an array to hold results
// Iterate over array
// Retain reference from last number
// Initial last number to 0
//  Last = last > current ? last : current
// If the difference between last number and current is greater than 1
//  Push (last + 1) onto result array
// Return results

