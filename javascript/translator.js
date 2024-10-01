// braille represented as a javascript object
const brailleMap = {
  // letters
  "a": "O.....", "b": "O.O...", "c": "OO....", "d": "OO.O..", "e": "O..O..",
  "f": "OOO...", "g": "OOOO..", "h": "O.OO..", "i": ".OO...", "j": ".OOO..",
  "k": "O...O.", "l": "O.O.O.", "m": "OO..O.", "n": "OO.OO.", "o": "O..OO.",
  "p": "OOO.O.", "q": "OOOOO.", "r": "O.OOO.", "s": ".OO.O.", "t": ".OOOO.",
  "u": "O...OO", "v": "O.O.OO", "w": ".OOO.O", "x": "OO..OO", "y": "OO.OOO", "z": "O..OOO",
  // mumbers
  "1": "O.....", "2": "O.O...", "3": "OO....", "4": "OO.O..", "5": "O..O..",
  "6": "OOO...", "7": "OOOO..", "8": "O.OO..", "9": ".OO...", "0": ".OOO..",
  // special symbols
  " ": "......",  // Space
  "capital": ".....O",  // capitalization follows
  "number": ".O.OOO",    // number follows
  "decimal": "O.OO..",  // decimal follows

  // punctuation and special characters
  ".": ".O.O..",  // Period
  ",": "O.....",  // Comma
  "?": ".OO.O.",  // Question mark
  "!": ".OO.OO",  // Exclamation mark
  ":": "OO..OO",  // Colon
  ";": "O.O.O.",  // Semicolon
  "-": "O...O.",  // Hyphen
  "/": "O..O..",  // Slash
  "<": "OO....",  // Less than
  ">": ".O....",  // Greater than
  "(": "O.OO..",  // Left parenthesis
  ")": "O..OOO",  // Right parenthesis
};


// get the input string from the command-line and join into a single string
const input = process.argv.slice(2).join(" ");

// Check if input is braille
const isBraille = (input) => {
  return /^[O. ]+$/.test(input);
}


// convert to braille
const toBraille = (text) => {
  let result = "";
  // Track whether we are in number mode
  let isNumber = false;

  for (let char of text) {
      if (char === " ") {
          result += brailleMap[" "];  // Add Braille space
          isNumber = false;  // Reset number mode after space
      } else if (char >= 'A' && char <= 'Z') {
          result += brailleMap["capital"];  // Add capital marker
          result += brailleMap[char.toLowerCase()];
          isNumber = false;  // Reset number mode after a capital letter
      } else if (char >= '0' && char <= '9') {
          if (!isNumber) {
              result += brailleMap["number"];  // Add number marker only once
              isNumber = true;  // Enter number mode
          }
          result += brailleMap[char];  // Convert the digit to Braille
      } else if (brailleMap[char]) {
          result += brailleMap[char];  // Convert other characters (punctuation, etc.)
          isNumber = false;  // Reset number mode if a non-number is encountered
      } else {
          console.error(`Character "${char}" not found in brailleMap`);
      }
  }

  return result;
}




const toEnglish = (braille) => {
  let result = "";
  let isCapital = false;
  let isNumber = false;

  // Split Braille into chunks of 6 dots
  let brailleChars = braille.match(/.{1,6}/g);

  for (let char of brailleChars) {
      if (char === brailleMap["capital"]) {
          isCapital = true;  // Capitalize next letter
      } else if (char === brailleMap["number"]) {
          isNumber = true;  // Numbers follow
      } else if (char === brailleMap[" "]) {
          result += " ";  // Add space
          isNumber = false;  // Reset number mode after space
      } else {
          let letter;
          if (isNumber) {
              // Search for numbers only
              letter = Object.keys(brailleMap).find(key => brailleMap[key] === char && !isNaN(key));
              isNumber = false;  // Reset number mode after each number
          } else {
              // Search for letters
              letter = Object.keys(brailleMap).find(key => brailleMap[key] === char && isNaN(key));
          }

          if (isCapital && letter) {
              letter = letter.toUpperCase();
              isCapital = false;  // Reset capital mode
          }

          if (letter) {
              result += letter;
          } else {
              console.error(`Braille pattern "${char}" not found`);
          }
      }
  }

  return result;
}


// check if the input is Braille and run the appropriate function
if (isBraille(input)) {
    console.log(toEnglish(input));
} else {
    console.log(toBraille(input));
}