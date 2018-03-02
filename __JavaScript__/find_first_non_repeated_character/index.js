// ----------------------------------------
// First Non-Repeated String
// ----------------------------------------

// First psuedocode, then write in JavaScript, a function to find the first nonrepeated character in a string. Return null if all the characters repeat.

// Think about time complexity. What would happen if you passed your function a whole paragraph of text?

firstNonRepeatedChar("total");
//=> "o"

firstNonRepeatedChar("teeter");
//=> "r"

firstNonRepeatedChar("deed");
//=> null




// ----------------------------------------
// Naive
// ----------------------------------------

// A naive solution would be to have a loop that looks at each character in the string, and a nested loop to sweep the rest of the string, hoping not to find a match.



// ----------------------------------------
// Optimized
// ----------------------------------------

// A better solution is to establish a hash table of characters and count how often they occur. Once you have created this histogram, you can sweep the string again and return the first character that has a count of one. Two sweeps of a string is still a linear time solution.

function firstNonRepeatedChar(str){

  var alphaHash = {};

  for (var i = 0; i < str.length; i++){
    var targetChar = str[i];

    if (alphaHash[targetChar]) {
      alphaHash[targetChar]++;
    } else {
      alphaHash[targetChar] = 1;
    }
  }

  for (var i = 0; i < str.length; i++){
    if ( alphaHash[str[i]] === 1 ) {
      return str[i];
    }
  }

  return null;
};


console.log(firstNonRepeatedChar("total"));
//=> "o"

console.log(firstNonRepeatedChar("teeter"));
//=> "r"

console.log(firstNonRepeatedChar("deed"));
//=> null













