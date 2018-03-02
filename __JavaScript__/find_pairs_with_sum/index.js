

function findPairsWithSum(array, sum) {
  const pairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    const a = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const b = array[j];
      if (a + b === sum) {
        pairs.push([a, b]);
      }
    }
  }
  return pairs;
}


function findPairsWithSumOptimized(array, sum) {
  const pairs = [];
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    const a = array[i];
    const diff = sum - a;
    if (hash[diff] != undefined) {
      const pair = [diff, a];
      pairs.push(pair);
    }
    hash[a] = a;
  }
  return pairs;
}

(() => {
  const array = [-4, 2, 1, 9, 7, 5, 3, 0];
  const sum = 3;
  const result = findPairsWithSum(array, sum);
  const answer = [ [ -4, 7 ], [ 2, 1 ], [ 3, 0 ] ];
  console.log(result, result.join('') === answer.join(''));
  //=> [ [ -4, 7 ], [ 2, 1 ], [ 3, 0 ] ] true
})();

(() => {
  const array = [-4, 2, 1, 9, 7, 5, 3, 0];
  const sum = 3;
  const result = findPairsWithSumOptimized(array, sum);
  const answer = [ [ 2, 1 ], [ -4, 7 ], [ 3, 0 ] ];
  console.log(result, result.join('') === answer.join(''));
  //=> [ [ -4, 7 ], [ 2, 1 ], [ 3, 0 ] ] true
})();


