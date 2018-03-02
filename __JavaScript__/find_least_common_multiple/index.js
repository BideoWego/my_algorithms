// Write a function called findLCM that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers. The least common multiple should be a positive integer that can be evenly divided by both of the starting numbers, as well as by all sequential numbers in the range between them.
//
// The starting array will contain two numbers that will not necessarily be in numerical order.
//
// For example, if given [5, 1], find the least common multiple of both 1 and 5 that is evenly divisible by all numbers between 1 and 5.

// When complete, your function should return the following results for these arrays:
// [5, 1] => 60
// [8, 7] => 56
// [4, 8] => 840

// An optimized solution should use a recursive function inside the findLCM function.


// function findLeastCommonMultiple([a, b]) {
//   if (a > b) {
//     [a, b] = [b, a];
//   }

//   let lcm;
//   let loop = 1;
//   let i = a;
//   while (i < b) {
//     lcm = a * loop * b;

//     for (i = a + 1; i < b; i++) {
//       const remainder = lcm % i;
//       if (remainder > 0) {
//         break;
//       }
//     }

//     loop++;
//   }

//   return lcm;
// }

function findLeastCommonMultiple([a, b]) {
  if (a > b) {
    [a, b] = [b, a];
  }

  const range = Array.apply(null, Array(b - a + 1)).map((n, i) => a + i);

  let lcm;
  let loop = 1;
  let i;
  while (i !== range.length) {
    const [x, y] = range;
    lcm = x * loop * y;

    for (i = 2; i < range.length; i++) {
      const z = range[i];
      const remainder = lcm % z;
      console.log()
      if (remainder > 0) {
        break;
      }
    }

    loop++;
  }

  return lcm;
}


function findLeastCommonMultipleOptimized([a, b]) {
  if (a > b) {
    [a, b] = [b, a];
  }

  let lcm;

  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);

  for (let i = a; i < b; i++) {
    lcm = i === a ?
      i * (i + 1) / gcd(i, i + 1) :
      lcm * (i + 1) / gcd(lcm, i + 1);
  }

  return lcm;
}


[
  [5, 1],
  [8, 7],
  [4, 8]
].forEach(pair => {
  console.log(findLeastCommonMultiple(pair));
  console.log(findLeastCommonMultipleOptimized(pair));
});