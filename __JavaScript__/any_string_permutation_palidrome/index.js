


function isAnyPermPalidrome(str) {
  var charCounts = {};

  // Get counts of occurrences of all chars
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!charCounts[char]) {
      charCounts[char] = 0;
    }
    charCounts[char]++;
  }

  // Get number of chars with odd number of occurrences
  var numOdds = 0;

  for (var i in charCounts) {
    if (charCounts[i] % 2 !== 0) {
      numOdds++;
    }
  }

  // If the string length is even and
  // there are no odd chars return true
  if (str.length % 2 === 0 && numOdds === 0) {
    return true;

  // If the string length is odd and
  // there is exactly one odd char return true
  } else if (str.length % 2 !== 0 && numOdds === 1) {
    return true;
  }

  // All other cases result in false
  return false;
}


console.log('civic', isAnyPermPalidrome('civic'));
console.log('civi', isAnyPermPalidrome('civi'));
console.log('ciic', isAnyPermPalidrome('ciic'));
console.log('ciicab', isAnyPermPalidrome('ciicab'));




