/*

Given a number of cents in USD as a positive integer, write a function `waysToCountChange()` that returns the number of possible ways to represent that change with the denominations: quarters, dimes, nickels and pennies.

 */

function waysToCountChange(cents, denominator=null) {
  if (!denominator) {
    denominator = 25;
  }

  const nextDenominator = {
    "25": 10,
    "10": 5,
    "5": 1
  }[denominator];

  if (!nextDenominator) {
    return 1;
  }

  let numWays = 0;

  for (let i = 0; i * denominator <= cents; i++) {
    const nextCents = cents - i * denominator;
    numWays += waysToCountChange(nextCents, nextDenominator);
  }

  return numWays;
}


console.log(waysToCountChange(4));
console.log();
//=> 1
// 4 pennies

console.log(waysToCountChange(5));
console.log();
//=> 2
// 1 nickel or 5 pennies

console.log(waysToCountChange(10));
console.log();
//=> 4
// 1 dime, 2 nickels, 1 nickel and 5 pennies,
// or 10 pennies

console.log(waysToCountChange(100));
console.log();
//=> 242









