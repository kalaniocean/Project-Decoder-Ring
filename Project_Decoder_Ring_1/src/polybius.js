// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function genPolybius(encode = true) {
    const alpha = "abcdefgh(i/j)klmnopqrstuvwxyz";
    let row = 1,
      column = 1;
    const polyChart = {};
    for (let i = 0; i < alpha.length; i++) {
      if (column == 6) {
        column = 1;
        row += 1;
      }
      //creating key value pairs
      if (alpha[i] == "(") { 
        polyChart[alpha.substring(i, i + 5)] = `${column}${row}`;
        column += 1;
        i += 4;
      } else {
        polyChart[alpha[i]] = `${column}${row}`;
        column += 1;
      }
    }

    //return key/letter, value/code.. else is key/code, value/letter
    if (encode === true) {
      return polyChart;
    } else {
      for (const key in polyChart) {
        polyChart[polyChart[key]] = key;
      }
      return polyChart;
    }
  }

  function polybius(input, encode = true) {
    // your solution code here

    if (encode === false && input.replace(" ", "").length % 2 > 0) return false;

    input = input.toLowerCase();
    const polyChart = genPolybius(encode);
    const message = [];
    const encodeCheck = encode === true ? 1 : 2;

// if given 1 letter for encode, 2 num for decode
    for (let i = 0; i < input.length; i += encodeCheck) {
      const searchItem = input.slice(i, i + encodeCheck);
      // space check 
      if (input[i] == " ") {
        message.push(input[i]);
        i = i + (1 - encodeCheck);//if checked used for decoding
        const poly = genPolybius(encode);
      } else if (polyChart[searchItem]) {
        message.push(polyChart[searchItem]);
      } else { //combinded letters check
        const cipherGroups = Object.keys(polyChart);
        const foundKey = cipherGroups.find((key) => key.includes(searchItem));
        message.push(polyChart[foundKey]);
      }
    }
    return message.join("").toString();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
