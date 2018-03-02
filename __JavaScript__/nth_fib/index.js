//  A Fibonacci number is the sum of its previous two neighbors, starting at 0
// 0 1 1 2 3 5 8 13 21 34 .. i[n-2] + i[n-1] = i[n]
// Given an integer n, write a function to compute the nth Fibonacci number. Determine the Big O time complexity of your solution

// Expected Output:
// fibonacci(1) //=> 1
// fibonacci(4) //=> 3
// fibonacci(12) //=> 144
// fibonacci(40) //=> 102334155


function nthFib(n) {
  if (n <= 1) {
    return n;
  }

  const fibs = [0, 1]

  let a = 1;
  let b = 2;
  let c;
  for (let i = 2; i < n - 1; i++) {
    c = a + b;
    a = b;
    b = c;
    fibs.push(c);
  }

  console.log(fibs);

  return c;
}


[1, 4, 12, 40, 1234].forEach(n => {
  console.log(nthFib(n));
});




