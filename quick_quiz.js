

function a() {
  let a, b, c, d, e;
  a = 0;
  b = 1;
  c = 2.210;
  d = [];
  e = {};
  return
    + 'f'
    + e
    + d
    + c
    + b
    + a;
}


console.log(a())

// Question
// Brain teaser!
// Without running this code...
//=> What would this output be?


// Answer
//=> undefined

// Explanation
// This is a classic case of misdirection. The instinct is to look at all those variables and say, "Oh my!" let me think... we're concatenating backwards so... etc... lots of thinking and reversing the order of what you see in your mind's eye. BUT! It's a distraction from the real issue/bug with this code. Namely, "Automatic Semicolon Insertion" will cause this function to return `undefined`. The function might as well have looked like this:


function a() {
  return
}


// For example, if you have a function that looks like this:


function a() {
  return
    'asdf';
}


// What ASI does is change your lovely code to:


function a() {
  return;
    'asdf';
}


// And even though it isn't what you intended or expect, it IS what JavaScript will do! And you will get `undefined` because you aren't returning anything!




function b() {
  let a, b, c, d, e;
  a = 0;
  b = 1;
  c = 2.210;
  d = [];
  e = {};
  return + 'f'
    + e
    + d
    + c
    + b
    + a;
}


console.log(b())

// Question
// How about now?
// Without running this code...
//=> What would this output be?


// Answer
//=> 'NaN[object Object]2.2110'


// Explanation
// This time we WILL get a more interesting return value and one that is actually effected by the variables created within the function. The appearance of the variables and the order of the numbers `0`, `1`, and `2.210` is also meant to misdirect a bit. But that's not all. The repetition of `+ someValue` is also meant to misdirect a bit.

// As soon as you begin concatenating with a string via the `+` operator you'll continue to cast values to strings as you concatenate more values together. So:

10 + '1'
//=> '101'

// But what about beginning the expression with a string that is not numeric? What will this return?

+ 'f'

// Well using the `+` operator in front of a string is a simple way to cast that value to a number. So if it were:

+ '10'

// We'd get `10`. But instead we have a value `'f'` which CANNOT be cast to a number. So we get `NaN`. We'd get the same result if we did `Number('f')`

// Now `e` is an object. When we cast an object to a string we get the lovely and helpful `'[object Object]'` output that JavaScript gives for all objects. So so far, we'll have `'NaN[object Object]'`. Interesting!

// Now what about that array? Well, you might not realize this, but casting an array to a string actually returns an empty string. That's why `[] == ''` returns `true`! So continuing our step by step concatenation explanation, we still have the same output as before `'NaN[object Object]'`.

// The misdirection with the numbers is to think that when casting `2.210` to a string, we preserve the trailing `0`. But JavaScript is efficient in that it realizes that extra `0` is meaningless to the representation of the number `2.21` and thus it removes it. So the value of `c` is `2.21`. So when we concatenate the numbers together in reverse we actually get `'2.2110'`.

// Again, the final output is:
'NaN[object Object]2.2110'

// NOTE, there's parts of this output I didn't get right when I guessed it originally either ;)




function c(a, d=[]) {
  let b = a.charCodeAt(0);
  let e = 'a';
  d.push(a);
  if (e >= a) {
    return d;
  }
  let f = String.fromCharCode(--b);
  return c(f, d);
}


console.log(c('z'));

// Question
// What output will this function have?


// Answer
//=> [ 'z',
//   'y',
//   'x',
//   'w',
//   'v',
//   'u',
//   't',
//   's',
//   'r',
//   'q',
//   'p',
//   'o',
//   'n',
//   'm',
//   'l',
//   'k',
//   'j',
//   'i',
//   'h',
//   'g',
//   'f',
//   'e',
//   'd',
//   'c',
//   'b',
//   'a' ]




// Explanation
// This is a recursive function that uses an array to store results of previous calls. If you had to give this function a name it might be something like `function reverseAlphaRange() { ... }` because it generates an array of the alphabet in reverse order given a starting letter. Maybe not quite a range since you can't specify the ending letter... but anyway! The condition `(e >= a)` is met simply when the string `'a'` is equal to or greater than the input `a`. JavaScript compares strings by their unicode values, so it's essentially no different from comparing numbers (for the most part).

// In order to backtrack in the alphabet we get the char code of the input `a` and subtract `1` from it. But let's look at how we do this in this single liner:


let f = String.fromCharCode(--b);

// Why does this work? Why `--b`? Would it work if we did `b--`? NOPE! We'd get an infinitely recursive function! Why? Because `--b` subtracts `1` from the number before the value is passed to `String.fromCharCode` while `b--` subtracts `1` AFTER it is passed to the function. This means the value is never really decremented as far as our input to the next function call. If we were to output what the value of `a` when using `let f = String.fromCharCode(b--);` is we'd always get the original value of `z`. This means our condition would never be met and we'd never return the array! Using `--b` allows us to pass the decremented value without needing an extra line to do this:


b--;
let f = String.fromCharCode(b);


// Finally, `d` has a default value of `[]` so the first time the function is called we omit this value. However, internally that value is passed with every recursive call. This allows the function to store results and when the final condition, (base case), is met and return the collected data.















