
const maximalSub = array => {
  console.log(array);

  const sums = [];
  let max = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum < 0) {
      sum = 0;
    }
    max = sum > max ? sum : max;
    sums.push(sum);
  }

  console.log(max);

  return sums;
};

[
  [1, 0, -1, 5, 6, -10, 100, -101],
  [1, 2, 3, 4, -10],
  [-10, 1, 2, 3, 4, 5],
  [-5, -5, -5, 100, -50, 100, -5, -5, -5]
].forEach(a => console.log(maximalSub(a)));
