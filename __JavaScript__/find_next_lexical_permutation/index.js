// Given a string `a`, rearrange the letters of `a` to construct another string `b` in such a way that `b` is lexicographically greater than `a`. In case of multiple possible answers, find the lexicographically smallest one among them.

// Input Format

// The first line of input contains , the number of test cases. Each of the next  lines contains .

// Constraints



//  will contain only lower-case English letters and its length will not exceed .
// Output Format

// For each testcase, output a string lexicographically bigger than  in a separate line. In case of multiple possible answers, print the lexicographically smallest one, and if no answer exists, print no answer.


// Sample Input

// ab
// bb
// hefg
// dhck
// dkhc


// Sample Output

// ba
// no answer
// hegf
// dhkc
// hcdk


// Explanation

// Test case 1: 
// There exists only one string greater than ab which can be built by rearranging ab. That is ba.
// Test case 2: 
// Not possible to rearrange bb and get a lexicographically greater string.
// Test case 3: 
// hegf is the next string lexicographically greater than hefg.
// Test case 4: 
// dhkc is the next string lexicographically greater than dhck.
// Test case 5: 
// hcdk is the next string lexicographically greater than dkhc.





// https://www.hackerrank.com/challenges/bigger-is-greater
// http://stackoverflow.com/a/1622539/5113832
// http://stackoverflow.com/a/31145957/5113832


// abcdcba

function nextLex(str) {
  // Change string to array of chars
  var array = str.split('');

  console.log(array);

  // Start at end of array
  var i = array.length - 1;

  // Move pointer back until
  // prev is less than current
  while (i > 0 && array[i - 1] >= array[i]) { i--; }

  console.log('i: ', array[i]);

  // If we moved to beginning or -1
  // return
  if (i <= 0) {
    console.log('No answer');
    console.log('Returning false');
    console.log('');

    return false;
  }

  // Start at end
  var j = array.length - 1;

  // Move pointer back until
  // current is greater than
  // the value at other pointer
  while (array[j] <= array[i - 1]) { j--; }

  console.log('j: ', array[j]);
  console.log('Switching: i - 1: ' + array[i - 1] + ', j: ' + array[j]);

  // Swap values at both
  // indexes
  var temp = array[i - 1];
  array[i - 1] = array[j];
  array[j] = temp;


  console.log(array);

  // Reverse the order of
  // all elements after
  // first pointer
  j = array.length - 1;
  while (i < j) {
    console.log('Switching: i: ' + array[i] + ', j: ' + array[j]);

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    console.log(array);

    i++;
    j--;
  }

  console.log('Returning', array);
  console.log('');

  // Return string
  return array.join('');
}


if (require.main === module) {
  nextLex('ab');
  nextLex('bb');
  nextLex('hefg');
  nextLex('dhck');
  nextLex('dkhc');

  nextLex('abcdcba');
}


















