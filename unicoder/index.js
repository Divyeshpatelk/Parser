var Parser = (() => {
  var codePointPrinter = (string) => {
    for (var i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      console.log(char, char.codePointAt(0).toString(16));
    }
  };

  var shiftRight = (charArr, matra) => {
    for (
      let matraIndex = charArr.indexOf(matra), charIndex = matraIndex + 1;
      matraIndex > -1;
      matraIndex = charArr.indexOf(matra, charIndex + 1), charIndex = matraIndex + 1
    ) {
      while (charIndex !== charArr.length) {
        let charCode = charArr[charIndex].codePointAt(0);
        if (
          finisher.indexOf(charCode) > -1 &&
          (charIndex + 1 === charArr.length || viramaChars.indexOf(charArr[charIndex + 1].codePointAt(0)) === -1)
        ) {
          break;
        } else {
          charIndex++;
        }
      }
      charArr.splice(charIndex + 1, 0, matra);
      charArr.splice(matraIndex, 1);
    }

    return charArr;
  };
  var shiftLeft = (charArr, matra) => {
    for (
      let matraIndex = charArr.indexOf(matra), charIndex = matraIndex - 1;
      matraIndex > -1;
      matraIndex = charArr.indexOf(matra, charIndex + 1), charIndex = matraIndex - 1
    ) {
      while (charIndex !== -1) {
        let charCode = charArr[charIndex].codePointAt(0);
        if (starter.indexOf(charCode) > -1) {
          break;
        } else {
          charIndex--;
        }
      }

      charArr.splice(matraIndex, 1);
      charArr.splice(charIndex, 0, matra);
    }

    return charArr;
  };

  var convertWord = function(word) {
    let output = '';
    let wordArr = [...word];
    console.log('initial', wordArr);

    wordArr = shiftLeft(wordArr, '\u006F');

    wordArr = shiftRight(wordArr, '\u0072');
    wordArr = shiftRight(wordArr, '\u00C2');
    wordArr = shiftRight(wordArr, '\u00AE');
    console.log('after shift', wordArr);

    wordArr.forEach((char, index) => {
      console.log(char, char.codePointAt(0));
      output += BhartiGopika[char.codePointAt(0)] || char;
    });

    console.log('initial unicode', [...output]);

    while (output.indexOf(Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER + Gujarati.vowel_SIGN_AA) !== -1) {
      output = output.replace(Gujarati.sign_VIRAMA + Unicode.ZERO_WIDTH_JOINER + Gujarati.vowel_SIGN_AA, '');
    }

    while (output.indexOf(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E) !== -1) {
      output = output.replace(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.vowel_SIGN_O);
    }

    output = output.replace(Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_AI, Gujarati.vowel_SIGN_AU);
    output = output.replace(Gujarati.letter_A + Gujarati.vowel_SIGN_AA + Gujarati.vowel_SIGN_E, Gujarati.letter_O);

    console.log('result', [...output]);

    return output;
  };

  var wordGenerator = function*(string) {
    let i = 0,
      len = string.length,
      word = '';
    while (i < len) {
      let char = string.charAt(i);
      if (char === ' ') {
        if (word !== '') {
          yield word;
          word = '';
        }
        yield ' ';
      } else {
        word += char;
      }
      i++;
    }
    return word;
  };

  var convert = function(string) {
    let unicodeString = '';

    let wordIterator = wordGenerator(string);
    for (let word; (word = wordIterator.next().value); ) {
      console.log(word);
      let converted = convertWord(word);
      console.log(converted);
      unicodeString += converted;
    }

    // unicodeEditor.val(unicodeString);
    return unicodeString;
  };

  return { convert };
})();

// module.exports = parser;
