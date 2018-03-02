// Longest int sub sequence (contiguous sub array)


// i.e. for arr =  [1, 56, 52, 58, 55, 54, 57, 53, 40, 90, 92, 94, 93, 91, 45];
// shows Length = 7 and contiguous subarray is: 56, 52, 58, 55, 54, 57, 53



function longestSequence(array) {
  var sequences = [],
      sorted = array.slice().sort(function(a, b) { return a - b; }),
      last,
      current,
      sequenceIndex = 0;

  for (var i = 1; i < sorted.length; i++) {
    last = sorted[i - 1];
    current = sorted[i];
    var difference = Math.abs(current - last);

    if (!sequences[sequenceIndex]) {
      sequences[sequenceIndex] = [];
    }

    sequences[sequenceIndex].push(last);
    if (difference !== 1) {
      sequenceIndex++;
    }
  }

  var max = 0,
      maxIndex = 0,
      sequence;

  for (var i = 0; i < sequences.length; i++) {
    sequence = sequences[i];
    if (sequence.length > max) {
      max = sequence.length;
      maxIndex = i;
    }
  }

  sequence = sequences[maxIndex];

  var startIndex = array.length,
      endIndex = 0;

  for (var i = 0; i < sequence.length; i++) {
    var value = sequence[i];
    var index = array.indexOf(value);
    startIndex = (startIndex < index) ? startIndex : index;
    endIndex = (endIndex > index) ? endIndex : index;
  }

  console.log(startIndex, endIndex);

  return array.slice().splice(startIndex, endIndex - startIndex + 1);
}

if (require.main === module) {
  var array = [1, 56, 52, 58, 55, 54, 57, 53, 40, 90, 92, 94, 93, 91, 45];
  console.log(longestSequence(array));
}






