// Given a sorted array of integers and a number n, perform a binary search on the array to find the index at which the number should be inserted. Return that index with a comparator to specify if n should be inserted above, below or exists at that index. Perform the search in-place.


// Example:

//    Input: [ 1, 2, 3 ], 4
//    Output: [ 2, 1 ]

//    Input: [ 1, 2, 3, 4, 5 ], 4
//    Output: [ 3, 0 ]

//    Input: [ 1, 2, 3, 5 ], 4
//    Output: [ 3, -1 ]


// 1. If the number exists in the array, return that index and 0 for the comparator
// 2. If the number does not, return the index at of the closest number and...
//    i. If n should be inserted before the number at the returned index the comparator should be -1
//    ii. If n should be inserted after the number at the returned index the comparator should be 1
// 3. If the array is empty return undefined




var n = 1234;

var a = [
  0,
  1,
  12,
  123,
  1234,
  12345,
  123456
];

var b = [
  1,
  12,
  123,
  1234,
  12345,
  123456
];

var c = [
  1,
  12,
  123,
  12345
];

var d = [
  1,
  12,
  123,
  124,
  125
];

var e = [];








// TODO make the array 2d and figure out how to overcome the array size limits


function binarySearch(array, n) {
  if (!array.length) return;

  var index;

  var bottomIndex = 0;
  var topIndex = array.length;
  var i = 0;
  while (topIndex - bottomIndex > 1) {
    // Find the middle
    // by dividing the difference of top/bottom by 2
    // and add the bottom to normalize
    var middle = Math.floor((topIndex - bottomIndex) / 2) + bottomIndex;

    // // Uncomment to see values
    // // by iteration
    console.log('Iteration: ' + (++i));
    console.log(n, '<=>', array[middle]);

    // Always return the index
    // of the current middle
    index = middle;

    // If n > middle
    if (n > array[middle]) {
      // Move up bottom index
      bottomIndex = middle + 1;
    // Else if n < middle
    } else if (n < array[middle]) {
      // Move down top index
      topIndex = middle - 1;
    // Else
    } else {
      // Set bottom and top to middle
      topIndex = bottomIndex = middle;
    }
  }

  var comparator = 0;
  if (n > array[middle]) {
    comparator = 1;
  } else if (n < array[middle]) {
    comparator = -1;
  }

  // return current index
  return [index, comparator];
}



console.log("\n", '--- a ---');
console.log('a', binarySearch(a, n));
console.log("\n", '--- b ---');
console.log('b', binarySearch(b, n));
console.log("\n", '--- c ---');
console.log('c', binarySearch(c, n));
console.log("\n", '--- d ---');
console.log('d', binarySearch(d, n));
console.log("\n", '--- e ---');
console.log('e', binarySearch(e, n));

// Big number!
var f = [];
console.log("\n", '--- f ---');
var  i = Math.pow(10, 6);
var j = 0;
while (i--) { f.push(j++) };
console.log('f', binarySearch(f, n));


