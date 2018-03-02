function zerosFirst (array) {
  var j = array.length - 1;
  for (var i = j; i > -1; i--) {
    if (array[i]) {
      var a = array[i];
      var b = array[j];
      array[j] = a;
      array[i] = b;
      j--;
    }
  }
  return array;
};

var a = [1, 0, 0, 1, 0, 0, 1];
var result = zerosFirst(a);
console.log(result);


