



function findFirstRepeat(array) {
  var uniques = {};
  var repeat;
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    uniques[value] = uniques[value] || 0;
    uniques[value]++;
    if (uniques[value] > 1) {
      repeat = value;
      break;
    }
  }
  return repeat;
}



var numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
console.log(findFirstRepeat(numbers));



