// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("Polybius, encode/decode", () => {

    it("encode output should be string type", () => {
      const expected = "string";
      const actual = typeof polybius("thinkful");
      expect(actual).to.equal(expected);
    });

    it("decode output should be string type", () => {
      const expected = "string";
      const actual = typeof polybius("4432423352125413",false);
      expect(actual).to.equal(expected);
    });


    it("message includes combined letters", () => {
        const message = "jiggle";
      const actual = polybius(message);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
      });

    

    it("string with space and capital letters", () => {
      const message = "Hello World";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";
      expect(actual).to.equal(expected);
    });

    it("message includes space", () => {
        const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    

    it("lower case string", () => {
      const message = "My message";
      const actual = polybius(message);
      const expected = "2345 23513434112251";
      expect(actual).to.equal(expected);
    });

});