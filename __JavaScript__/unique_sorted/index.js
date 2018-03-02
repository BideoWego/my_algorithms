

// Retrun a sorted array of only unique values

var array = [1, 3, 5, 9, 7, 4, 6, 3, 2, 45, 7, 9, 6, 3, 1, 3, 4, 6, 7, 4, 2, 12];
var answer = [1, 2, 3, 4, 5, 6, 7, 9, 12, 45];


function uniqueSorted(array) {
  var result;
  var hash = {};

  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    hash[value] = true;
  }

  result = Object.keys(hash);

  return result.map((i) => parseInt(i));
}

var result = uniqueSorted(array);

console.log(result);
console.log(result.join('') === answer.join(''));









