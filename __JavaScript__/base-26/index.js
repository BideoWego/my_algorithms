/*

Given a function `charRange` that returns an array of all the lower case letters of the alphabet:

* Write a function `toString26` that takes a num and converts it into its alphabetic base 26 string representation.
* Write a function `toIntFromString26` that takes a base 26 string and converts it into its base 10 integer representation.

Examples:
    a 1
    z 26
    ba 53
    bb 54
    aa 27
    abc 731
    abcdefg 334123303
    abcdefghijklm 103215959525275440

*/



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



function toString26(num) {
  var alpha = charRange('a', 'z');
  var result = '';

  // no letters for 0 or less
  if (num < 1) {
    return result;
  }

  var quotient = num,
      remainder;

  // until we have a 0 quotient
  while (quotient !== 0) {

    // compensate for 0 based array
    var decremented = quotient - 1;

    // divide by 26
    quotient = Math.floor(decremented / 26);

    // get remainder
    remainder = decremented % 26;

    // prepend the letter at index of remainder
    result = alpha[remainder] + result;
  }

  return result;
}



function toIntFromString26(str) {
  var alpha = charRange('a', 'z');
  var result = 0;

  // make sure we have a usable string
  str = str.toLowerCase();
  str = str.replace(/[^a-z]/g, '');

  // we're incrementing j and decrementing i
  var j = 0;
  for (var i = str.length - 1; i > -1; i--) {

    // get letters in reverse
    var char = str[i];

    // get index in alpha and compensate for
    // 0 based array
    var position = alpha.indexOf(char);
    position++;

    // the power kinda like the 10's or 100's
    // etc... position of the letter
    // when j is 0 it's 1s
    // when j is 1 it's 10s
    // etc...
    var power = Math.pow(26, j);

    // add the power and index to result
    result += power * position;
    j++;
  }

  return result;
}



var main = function(){
  var str,
      num;

  num = toIntFromString26('a');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('z');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('ba');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('bb');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('aa');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('abc');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('abcdefg');
  str = toString26(num);
  console.log(str, num);

  num = toIntFromString26('abcdefghijklm');
  str = toString26(num);
  console.log(str, num);

  // Doesn't work because of
  // JavaScript internals
  //
  // num = toIntFromString26('abcdefghijklmn');
  // console.log(num);
  // str = toString26(num);
  // num = toIntFromString26(str);
  // console.log(str, num);
}


if (require.main === module) {
  main();
}



module.exports = {
  toString26: toString26,
  toIntFromString26: toIntFromString26,
  charRange: charRange
};









