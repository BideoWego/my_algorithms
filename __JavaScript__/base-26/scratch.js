// All lowercase alphabetic strings are a base 26 representation of a number

// a - 1
// z - 26
// aa - 27
// abc - 731
// abcdefg - 334123303

// Given a function that generates an array range of alphabetic characters

function charRange(start, stop) {
  var result = [];

  // get all chars from starting char
  // to ending char
  var i = start.charCodeAt(0),
      last = stop.charCodeAt(0) + 1;
  for (i; i < last; i++) {
    result.push(String.fromCharCode(i));
  }

  return result;
}


// Translate any string of lowercase letters to its base 10 number
// with a function `toString26`

// Now translate that number back into its base 26 alpha letter string
// with a function `toInt26`

var chars = charRange('a', 'z'),
    str,
    num;

num = toInt26('a');
str = toString26(num);
console.log(str, num);
// a - 1

num = toInt26('z');
str = toString26(num);
console.log(str, num);
// z - 26

num = toInt26('aa');
str = toString26(num);
console.log(str, num);
// aa - 27

num = toInt26('abc');
str = toString26(num);
console.log(str, num);
// abc - 731

num = toInt26('abcdefg');
str = toString26(num);
console.log(str, num);
// abcdefg - 334123303


