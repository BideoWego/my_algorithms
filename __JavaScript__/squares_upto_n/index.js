




function squaresUpto(n) {
  var v;
      spacer = 1,
      count = 0;
  var squares = [];
  for (var i = 0; i < n; i++) {
    v = count + spacer;
    squares.push(v);
    spacer += 2;
    count = v;
  }
  return squares;
}



if (require.main === module) {
  console.log(squaresUpto(16));
}




