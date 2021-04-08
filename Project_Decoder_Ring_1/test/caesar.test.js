// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("Caesar", () => {

    it("should return false if shift amount to 0", () => {
      const expected = false;
      const actual = caesarModule("random text", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift amount is not defined", () => {
        const expected = false;
        const actual = caesarModule("random text");
        expect(actual).to.equal(expected);
      });

    it("should return false if shift amount is less than -25", () => {
        const expected = false;
        const actual = caesarModule("random text", -26);
    expect(actual).to.equal(expected);
    });

    it("should return false if shift amount is greater than 25", () => {
        const expected = false;
        const actual = caesarModule("random text",26);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesarModule("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols", () => {
        const expected = "this is a secret message!";
        const actual = caesarModule("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("Should treat capital letters as lower case letters", () => {
    const upperCase = caesarModule("Hello WORLD", 0);
    const lowerCase = caesarModule("hello world", 0);
    expect(upperCase).to.equal(lowerCase);
    });
    
});