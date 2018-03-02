
function toSpiral(array, size) {
  var height = size.x;
  var width = size.y;

  var x = 0;
  var y = 0;
  var n = width * height;
  var i = n - 1;

  var spiral = [];
  var h = height;
  while (h--) { spiral.push([]); }

  var directions = [
    { x: 1, y: 0, d: 'r', m: width - 1 },
    { x: 0, y: 1, d: 'd', m: height - 1 },
    { x: -1, y: 0, d: 'l', m: 0 },
    { x: 0, y: -1, d: 'u', m: 0 }
  ];

  var directionIndex = 0;

  while (n--) {
    spiral[y][x] = array[i - n];

    var direction = directions[directionIndex];
    x += direction.x;
    y += direction.y;

    switch (direction.d) {
      case 'r':
        if (x >= direction.m) {
          direction.m--;
          directionIndex++;
        }
        break;
      case 'd':
        if (y >= direction.m) {
          direction.m--;
          directionIndex++;
        }
        break;
      case 'l':
        if (x < direction.m + 1) {
          direction.m++;
          directionIndex++;
        }
        break;
      case 'u':
        if (y < direction.m + 2) {
          direction.m++;
          directionIndex = 0;
        }
        break;
    }
  }

  return spiral;
}


function render(grid) {
  var spacing = 1;
  grid.forEach(function(row) {
    row.forEach(function(cell) {
      var n = cell.toString().length;
      spacing = spacing > n ? spacing : n;
    });
  });

  var str = '';
  grid.forEach(function(row) {
    row.forEach(function(cell) {
      str += ` ${ cell } `;
      var i = spacing - cell.toString().length;
      while (i--) { str += ' ' };
    });
    str += "\n";
  });
  return str;
}


var size = {
  x: 5,
  y: 5
};


var array = [];
var n = size.x * size.y;
var i = n;
while (n--) { array.push(i - n) }


console.log(array);
console.log();
//=> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ]

var test = [
  [1,  2,  3,  4,  5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
];


var renderedTest = render(test);
console.log(renderedTest);

var spiral = toSpiral(array, size);

var renderedSpiral = render(spiral);
console.log(renderedSpiral);








