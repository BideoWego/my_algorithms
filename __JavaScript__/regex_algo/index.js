// Some examples:
// isMatch("aa","a") => false
// isMatch("aa","aa") => true
// isMatch("aaa","aa") => false
// isMatch("aa", "a*") => true
// isMatch("aa", ".*") => true
// isMatch("ab", ".*") => true
// isMatch("aab", "c*a*b") => true




/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // Separate the pattern into chars and quantifiers
  var patternChars = [];
  for (var i = 0; i < p.length; i++) {
    var currentChar = p[i];
    var nextChar = p[i];
    var quanitifier;
    if (nextChar === '*') {
      quanitifier = '*';
    }
    patternChars.push({
      char: currentChar,
      quanitifier: quanitifier
    });
  }


  // Iterate over the string according to the chars and quatifiers
  var stringIndex = 0;
  for (var i = 0; i < patternChars.length; i++) {
    var patternChar = patternChars[i].char;
    var quanitifier = patternChars[i].quanitifier;
    var stringChar = s[stringIndex];

    if (patternChar === '.') {
      if (quanitifier === '*') {
        // Else return true
        return true;
      } else {
        stringIndex++;
      }
    } else {
      if (quanitifier === '*') {
        while (stringChar === patternChar) {
          stringIndex++;
          stringChar = s[stringIndex];
        }
        if (stringIndex === s.length - 1) {
          return true;
        }
      } else {
        if (stringChar === patternChar) {
          stringIndex++;
        } else {
          // If a mismatch is reached return false
          return false;
        }
      }
    }
  }

  if (stringIndex < s.length) {
    return false;
  }


  return true;
};




// Some examples:
[
  ["aa","a"], //=> false
  ["aa","aa"], //=> true
  ["aaa","aa"], //=> false
  ["aa", "a*"], //=> true
  ["aa", ".*"], //=> true
  ["ab", ".*"], //=> true
  ["aab", "c*a*b"] //=> true
].forEach(pair => console.log(...pair, isMatch(...pair)));














