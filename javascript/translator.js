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
