// http://www.programcreek.com/2014/02/leetcode-longest-common-prefix-java/

// Problem

// Write a function to find the longest common prefix string amongst an array of strings.

// var stringsA = [
//   'foobar',
//   'foobaz',
//   'foofiz',
//   'foofaz'
// ];

// var stringsB = [
//   'dog',
//   'cat',
//   'animal',
//   'yak'
// ];

// var stringsC = [
//   'one',
//   'one two',
//   'one two three',
//   'one two three four'
// ];

// var stringsD = [
//   'onomatopoeia',
//   'onomatopoeia',
//   'onomatopoeia',
//   'onomatopoeia'
// ];

// console.log(longestCommonPrefixOf(stringsA));
// //=> foo
// console.log(longestCommonPrefixOf(stringsB));
// //=> ''
// console.log(longestCommonPrefixOf(stringsC));
// //=> one
// console.log(longestCommonPrefixOf(stringsD));
// //=> onomatopoeia





function longestCommonPrefixOf(array) {
  // Empty string if no array
  // or empty
  if (!array || !array.length) {
    return ''; 
  }

  // If array only has 1 string
  // the longest prefix is that string
  if (array.length === 1) {
    return array[0];
  }

  // Start counter at beginning of string
  var i = 0;

  // Get first string
  var a = array[i],
      b;

  // While we have a char
  while (a.charAt(i)) {

    // Loop through pairs of strings
    for (var j = 0; j < array.length - 1; j++) {
      a = array[j];
      b = array[j + 1];

      console.log(a.substr(0, i));

      // Compare current char
      if (a.charAt(i) !== b.charAt(i)) {

        // If different return the sub string
        // up to that char
        return a.substr(0, i);
      }
    }

    // Increment char index
    i++;
  }

  // If no sub string was found
  // return the first string because
  // all strings are the same
  return array[0];
}





if (require.main === module) {
  var stringsA = [
    'foobar',
    'foobaz',
    'foofiz',
    'foofaz'
  ];

  var stringsB = [
    'dog',
    'cat',
    'animal',
    'yak'
  ];

  var stringsC = [
    'one',
    'one two',
    'one two three',
    'one two three four'
  ];

  var stringsD = [
    'onomatopoeia',
    'onomatopoeia',
    'onomatopoeia',
    'onomatopoeia'
  ];

  console.log(longestCommonPrefixOf(stringsA));
  console.log(longestCommonPrefixOf(stringsB));
  console.log(longestCommonPrefixOf(stringsC));
  console.log(longestCommonPrefixOf(stringsD));
}


