// find next positive integer with same count of 1s in binary



Number.prototype.toBinary = function() {
  return (this >>> 0).toString(2);
};


function listBinaries(start, stop) {
  var start = start || 0,
      stop = stop || 100;
  for (var i = start; i <= stop; i++) {
    console.log(i + ': ' + i.toBinary());
  }
}


listBinaries();





