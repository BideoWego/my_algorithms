/*
  A binary gap within a positive integer N is any maximal sequence of consecutive zeros that
  is surrounded by ones at both ends in the binary representation of N.

  For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
  The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4
  and one of length 3. The number 20 has binary representation 10100 and contains one binary gap
  of length 1. The number 15 has binary representation 1111 and has no binary gaps.

  Write a function hat, given a positive integer N, returns the length of its longest binary gap.
  The function should return 0 if N doesn't contain a binary gap.

  1001 = 9 (edited)
  binary gap of 2

  1000010001 = 529
  binary gap of 4

  10100 = 20
  binary gap of 1
*/




const binGap = num =>
  num
    .toString(2)
    .split("1")
    .slice(0, -1)
    .reduce((acc, el) => el.length > acc ? el.length : acc, 0);


const nums = [9, 529, 20];
nums.forEach(num => {
  const result = binGap(num);
  console.log(num, result);
});














