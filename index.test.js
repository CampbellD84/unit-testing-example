const index = require("./index");

// AAA

describe("fizzbuzz func", () => {
  it("should return fizz when call with 3", () => {
    // empty body tends to return a false positive

    // Arrange

    const input = 3;

    // Action

    const output = index.fizzBuzz(input);

    // Assertion

    expect(output).toBe("fizz");
  });

  it("should return buzz when call with 5", () => {
    // empty body tends to return a false positive

    // Arrange

    const input = 5;

    // Action

    const output = index.fizzBuzz(input);

    // Assertion

    expect(output).toBe("buzz");
  });
  it("should return fizzbuzz when call with 15", () => {
    // empty body tends to return a false positive

    // Arrange

    const input = 15;

    // Action

    const output = index.fizzBuzz(input);

    // Assertion

    expect(output).toBe("fizzbuzz");
  });

  it("should return num when not divisible by 3 || 5", () => {
    // empty body tends to return a false positive

    // Arrange

    const input = 11;

    // Action

    const output = index.fizzBuzz(input);

    // Assertion

    expect(output).toBe(input);
  });
});

// Arrange

// Action

// Assertion
