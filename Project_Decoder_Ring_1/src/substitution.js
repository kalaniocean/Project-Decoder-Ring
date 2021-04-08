// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function earlyLad(alphabet) {
    //early check function
    switch (true) {
      case alphabet === undefined:
        return false;
      case alphabet.length != 26:
        return false;
      default:// dupe find
        for (letter of alphabet) {
          if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter))
            return false;
        }
    }
  }

  function substitution(input, alphabet, encode = true) {
    if (earlyLad(alphabet) === false) return false; //stop function early return false
    const alpha = "abcdefghijklmnopqrstuvwxyz ";
    //had to include spaces
    const newAlpha = [...alphabet, " "];
    inputs = input.toLowerCase();
    const result = [];

    if (encode === true) {
      for (let i = 0; i < inputs.length; i++) {
        result.push(newAlpha[alpha.indexOf(inputs[i])]);
      }
    } else {
      for (let i = 0; i < inputs.length; i++) {
        result.push(alpha[newAlpha.indexOf(inputs[i])]);
      }
    }
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
