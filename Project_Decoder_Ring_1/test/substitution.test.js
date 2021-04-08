// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("Substitution", () => {
    
    it("Should return false if input was not provided", () => {
        const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
      });

it("Should return false if alphabet is not exactly 26 characters long", () => {
    const message = "message";
    const alphabet = "short";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
    });


    it("Should return false if alphabet was not provided", () => {
        const alphabet = [];
        const actual = substitution(alphabet);
        const expected = false;
        expect(actual).to.be.false;
      });


    it("Encoding: should maintain spaces in the message", () => {
        const message = "my message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });


    it("should return false if duplicate values found in the given alphabet", () => {
        const message = "my message";
        const alphabet = "abcdefggghijklmnopqrstuvwxyy"
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
      const alphabet = "abcdefghijklmnopqrstuvwxy";
      const actual = substitution(alphabet.length == 26);
      const expected = false;
      expect(actual).to.equal(expected);
    });

    it("Decoding", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
        expect(actual).to.equal(expected);
    });

    it("Ignore cap letters", () => {
        const message = "My message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet)
        const expected = "yp ysii.rs"
        expect(actual).to.equal(expected)
    })

});