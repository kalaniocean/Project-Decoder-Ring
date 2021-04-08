// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {

    it("should return false if shift amount to 0", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });

    it("should return false if shift amount is not defined", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });

    it("should return false if shift amount is less than -25", () => {
        const message = "zebra magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if shift amount is greater than 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });

    it("should maintain spaces and special symbols", () => {
        const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols", () => {
        const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("Should treat capital letters as lower case letters", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";
  
        expect(actual).to.equal(expected);
    });
    
});