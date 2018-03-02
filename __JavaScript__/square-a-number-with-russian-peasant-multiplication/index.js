//  http://mathforum.org/dr.math/faq/faq.peasant.html


function pow2(n) {
  var value = n;
  var times = n;

  var pow = function(value, times) {
    if (times === 0) {
      return value;
    } else {
      var k = (n > 0) ? -1 : 1;
      var power = pow(value + n, times + k);
      if (n < 0 && n % 2 !== 0) {
        power *= -1;
      }
      return power;
    }
  };

  return pow(0, times);
}



function russianPeasantPow2(n) {
  if (n === 0) {
    return n;
  }

  var left = n,
      right = n,
      result = (n % 2 === 0) ? 0 : left;

  while (right !== 1) {
    left *= 2;
    right /= 2;
    right = Math.floor(right);
    console.log(left, right);
    if (right % 2 !== 0) {
      result += left;
    }
  }

  return result;
}





if (require.main === module) {
  [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ].forEach(function(n) {
    console.log(russianPeasantPow2(n));
    console.log();
  });
}

