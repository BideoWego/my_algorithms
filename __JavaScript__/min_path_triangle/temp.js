

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var mins = [];
    for (var i = 0; i < triangle.length; i++) {
        var row = triangle[i];
        var min = Infinity;
        for (var j = i; j <= i + 1; j++) {
            var value = row[j];
            min = min > value ? value : min;
        }
        mins.push(min);
    }
    console.log(mins);
    return mins.reduce(function(sum, i) { return sum + i; });
};


// console.log(minimumTotal(triangle));


function Node(options) {
  this.x = options.x;
  this.y = options.y;
  this.value = options.value;
  this.left = options.left;
  this.right = options.right;
  this.parent = options.parent;
}




var minPath = function(triangle) {
  var root = new Node({
    x: 0,
    y: 0,
    value: triangle[0][0]
  });


  var setChildren = function(node) {
    console.log([
      node.x,
      node.y,
      node.value
    ]);

    if (node.y + 1 >= triangle.length) {
      return;
    }

    var left = new Node({
      x: node.x,
      y: node.y + 1
    });

    var right = new Node({
      x: node.x + 1,
      y: node.y + 1
    });

    left.value = triangle[left.y][left.x];
    right.value = triangle[right.y][right.x];

    left.parent = node;
    right.parent = node;

    node.left = left;
    node.right = right;

    setChildren(left);
    setChildren(right);
  };

  setChildren(root);

  return root;
};


// minPath(triangle);









var n = triangle.length;
var indexes = [];
while (n--) {
  indexes.unshift(n);
}

var hash = {};
var movingIndex = triangle.length - 1;
var n = Math.pow(2, movingIndex);
while (n--) {
  var sum = 0;
  var key = '';
  for (var y = 0; y < triangle.length; y++) {
    var index = indexes[y];
    sum += triangle[y][index];
    key += index;
  }

  hash[key] = sum;

  indexes[movingIndex] -= 1;

  var max = 0;
  var firstIndexOfMax = 0;
  for (var i = 0; i < indexes.length; i++) {
    var value = indexes[i];
    if (max < value) {
      firstIndexOfMax = i;
      max = value;
    }
  }

  movingIndex = firstIndexOfMax;
}

console.log(hash);