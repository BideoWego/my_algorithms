/*

Create toMorseCode() and toPlainText() functions that respectively encrypt plain text into morse code and decrypt morse code into plain text.

Guidelines:
  * Assume all letters are lower case
  * Use the encryption and decryption keys

*/

ENCRYPTION_KEY = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  " ": "  "
};


DECRYPTION_KEY = {
  ".-"       : "a",
  "-..."     : "b",
  "-.-."     : "c",
  "-.."      : "d",
  "."        : "e",
  "..-."     : "f",
  "--."      : "g",
  "...."     : "h",
  ".."       : "i",
  ".---"     : "j",
  "-.-"      : "k",
  ".-.."     : "l",
  "--"       : "m",
  "-."       : "n",
  "---"      : "o",
  ".--."     : "p",
  "--.-"     : "q",
  ".-."      : "r",
  "..."      : "s",
  "-"        : "t",
  "..-"      : "u",
  "...-"     : "v",
  ".--"      : "w",
  "-..-"     : "x",
  "-.--"     : "y",
  "--.."     : "z",
  "-----"    : "0",
  ".----"    : "1",
  "..---"    : "2",
  "...--"    : "3",
  "....-"    : "4",
  "....."    : "5",
  "-...."    : "6",
  "--..."    : "7",
  "---.."    : "8",
  "----."    : "9",
  "  "       : " "
};


function toMorseCode(str) {
  var morseCode = '';

  // Ensure all lower case
  str = str.toLowerCase();

  // Iterate all chars
  for (var i = 0; i < str.length; i++) {

    // For each char
    var char = str[i];

    // If the char has a key value
    if (ENCRYPTION_KEY[char]) {

      // Add it to the return value
      morseCode += ENCRYPTION_KEY[char];

      // If the char is not a space
      if (char !== ' ') {

        // Add a space between the chars
        morseCode += ' ';
      }
    }
  }

  // Trim trailing whitespace
  return morseCode.trim();
}


function toPlainText(str) {
  var plainText = [];

  // Get words by splitting on double space
  var words = str.split('  ');

  // Iterate words
  for (var i = 0; i < words.length; i++) {

    // For each word
    var word = words[i];

    // Split into letters
    var letters = word.split(' ');

    // Iterate letters
    for (var j = 0; j < letters.length; j++) {

      // For each letter
      var letter = letters[j];

      // If the letter can be decrypted
      if (DECRYPTION_KEY[letter]) {

        // Add the decrypted value to the array
        plainText.push(DECRYPTION_KEY[letter]);
      }
    }

    // Separate words by a space
    plainText.push(' ');
  }

  // Join and trim trailing whitespace
  return plainText.join('').trim();
}



if (require.main === module) {
  var str = 'how now brown cow';

  var morseCode = toMorseCode(str);
  console.log(morseCode);

  var plainText = toPlainText(morseCode);
  console.log(plainText);
}













