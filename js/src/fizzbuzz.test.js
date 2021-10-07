const { fizzbuzz } = require("./fizzbuzz")

describe("FizzBuzz", () => {
  it("should return '1' when input 1", () => {
    const input = 1

    const result = fizzbuzz(input)

    expect(result).toBe("1")
  })

  it("should return '2' when input 2", () => {
    const input = 2

    const result = fizzbuzz(input)

    expect(result).toBe("2")
  })

  it("should return '3' when input 3", () => {
    const input = 3

    const result = fizzbuzz(input)

    expect(result).toBe("Fizz")
  })
})
