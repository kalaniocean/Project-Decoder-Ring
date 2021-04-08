// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("Polybiu, encode/decode", () => {

    it("encode output should be string type", () => {
      const expected = "string";
      const actual = typeof polybiusModule("thinkful");
      expect(actual).to.equal(expected);
    });

    it("decode output should be string type", () => {
      const expected = "string";
      const actual = typeof polybiusModule("4432423352125413",false);
      expect(actual).to.equal(expected);
    });


    it("message includes combined letters", () => {
        const expected = "th(i/j)nkful";
        const actual = polybiusModule("4432423352125413",false);
        expect(actual).to.equal(expected);
    });

    

    it("string with space and capital letters", () => {
      const expected = "3251131343 2543241341";
      const actual = polybiusModule("Hello World");
      expect(actual).to.equal(expected);
    });

    it("message includes space", () => {
        const expected = "hello world";
        const actual = polybiusModule("3251131343 2543241341",false);
        expect(actual).to.equal(expected);
    });

    

    it("lower case string", () => {
      const expected = "4432423352125413";
      const actual = polybiusModule("thinkful");
      expect(actual).to.equal(expected);
    });

});