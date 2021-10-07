const { fizzbuzz } = require("./fizzbuzz")

describe("FizzBuzz", () => {
  it("should return '1' when input 1", () => {
    // Arrange
    const input = 1

    // Act
    const result = fizzbuzz(input)

    // Assertion
    expect(result).toBe("1")
  })
})
