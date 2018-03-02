// https://leetcode.com/problems/triangle/
// http://qa.geeksforgeeks.org/4080/given-triangle-minimum-path-from-bottom-amazon-online-round

// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

 
// Note:
// Bonus if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.



var triangle = [
  [2],
  [3, 1],
  [6, 5, 1],
  [4, 1, 8, 1],
  [5, 5, 5, 5, 1]
];


function minPath(triangle) {
  var count = 0;
  var total = [];
  var l = triangle.length - 1;

  // Get values for last row
  // to start total sums
  for (var i = 0; i < triangle[l].length; i++) {
    total[i] = triangle[l][i];

    count++;
  }

  console.log(total);

  // Iterate backwards to top
  // summing the min value of
  // the two lower adjacent values
  // with the current
  for (var i = triangle.length - 2; i >= 0; i--) {
    for (var j = 0; j < triangle[i + 1].length - 1; j++) {
      var a = total[j];
      var b = total[j + 1];
      var min = a > b ? b : a;
      total[j] = triangle[i][j] + min;

      count++;
    }
  }

  console.log(total, count);

  return total[0];
}



console.log(minPath(triangle));






