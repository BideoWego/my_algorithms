// // x,y is bottom left corner
// var Rectangle = function Rectangle(x,y,w,h){
//  this.x = x;
//  this.y = y;
//  this.width = w;
//  this.height = h;
// }

// // No instersection
// var r1 = new Rectangle(1,2,3,4);
// var r2 = new Rectangle(5,3,2,4);
// // Rectangle {x: 0, y: 0, width: 0, height: 0}

// // Instersection
// var r3 = new Rectangle(2,2,6,4);
// var r4 = new Rectangle(6,3,3,4);
// // Rectangle {x: 6, y: 3, width: 2, height: 3}

var Rectangle = function Rectangle(x,y,w,h){
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
};


Rectangle.prototype.intersectionRectWith = function(rect) {
  // find left most rect
  var leftMost = this.x < rect.x ? this : rect;
  // find right most rect
  var rightMost = this.x > rect.x ? this : rect;
  // find lowest rect
  var lowest = this.y < rect.y ? this : rect;
  // find highest rect
  var highest = this.y > rect.y ? this : rect;

  if (rightMost.x > (leftMost.x + leftMost.width) &&
      highest.y > (lowest.y + highest.height)) {
    return new Rectangle(0, 0, 0, 0);
  }

  var x = rightMost.x;
  var y = highest.y;
  var w = (rightMost.x + rightMost.width) - x;
  var h = (lowest.y + lowest.height) - y;

  return new Rectangle(x, y, w, h);
};

var r1 = new Rectangle(1,2,3,4);
var r2 = new Rectangle(5,3,2,4);
console.log(r1.intersectionRectWith(r2));


var r3 = new Rectangle(2,2,6,4);
var r4 = new Rectangle(6,3,3,4);
console.log(r3.intersectionRectWith(r4));






