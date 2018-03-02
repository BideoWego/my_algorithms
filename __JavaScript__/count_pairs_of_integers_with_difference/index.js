// https://www.hackerrank.com/challenges/pairs


// Given `n` integers, count the number of pairs of integers whose difference is `k`.

// Input Format

// The first line contains `n` and `k`. 
// The second line contains `n` numbers of the set. All the `n` numbers are unique.

// Output Format

// An integer that tells the number of pairs of integers whose difference is `k`.

// Constraints: 
// Each integer will be greater than `n` and at least `k` smaller than 2^31-1.

// Sample Input

// 5 2  
// 1 5 3 4 2
// Sample Output

// 3
// Explanation

// There are 3 pairs of integers in the set with a difference of 2.



var pairs = {};

pairs.inefficient = function(a, k) {
  
  var count = 0;
  
  // Iterate over each num
  for (var i = 0; i < a.length; i++) {
    var left = a[i];
    
    // For each num
    for (var j = 0; j < a.length; j++) {

      // Skip if same index
      if (i === j) {
        continue;
      }
      
      // Get abs difference
      var right = a[j];

      if (Math.abs(left - right) === k) {

        // Increment if equals k
        count++;
      }
    }
  }

  // Divide by half because of duplicates
  return Math.floor(count / 2);
};


pairs.efficient = function(a, k) {

  // Make a hash to store keys
  var values = {};
  
  // Put all array values in as keys
  for (var i = 0; i < a.length; i++) {
    var key = a[i];
    values[key] = true;
  }

  // Iterate over all values again
  var count = 0;

  for (var i = 0; i < a.length; i++) {

    // Get key from value + k
    var key = a[i];
    key += k;

    // If the difference between the current
    // value and another number is k
    // then the value will be a key
    if (values[key]) {

      // Increment count
      count++;
    }
  }

  return count;
};



if (require.main === module) {
  var a = [1, 5, 3, 4, 2];
  var k = 2;

  console.log(pairs.inefficient(a, k));
  //=> 3

  console.log(pairs.efficient(a, k));
  //=> 3
}








