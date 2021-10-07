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

  it("should return '4' when input 4", () => {
    const input = 4

    const result = fizzbuzz(input)

    expect(result).toBe("4")
  })

  it("should return '5' when input 5", () => {
    const input = 5

    const result = fizzbuzz(input)

    expect(result).toBe("Buzz")
  })

  it("should return '6' when input 6", () => {
    const input = 6

    const result = fizzbuzz(input)

    expect(result).toBe("Fizz")
  })

  it("should return '7' when input 7", () => {
    const input = 7

    const result = fizzbuzz(input)

    expect(result).toBe("7")
  })

  it("should return '8' when input 8", () => {
    const input = 8

    const result = fizzbuzz(input)

    expect(result).toBe("8")
  })

  it("should return '9' when input 9", () => {
    const input = 9

    const result = fizzbuzz(input)

    expect(result).toBe("Fizz")
  })

  it("should return '10' when input 10", () => {
    const input = 10

    const result = fizzbuzz(input)

    expect(result).toBe("Buzz")
  })

  it("should return '11' when input 11", () => {
    const input = 11

    const result = fizzbuzz(input)

    expect(result).toBe("11")
  })

  it("should return '12' when input 12", () => {
    const input = 12

    const result = fizzbuzz(input)

    expect(result).toBe("Fizz")
  })

  it("should return '13' when input 13", () => {
    const input = 13

    const result = fizzbuzz(input)

    expect(result).toBe("13")
  })

  it("should return '13' when input 13", () => {
    const input = 13

    const result = fizzbuzz(input)

    expect(result).toBe("13")
  })

  it("should return '14' when input 14", () => {
    const input = 14

    const result = fizzbuzz(input)

    expect(result).toBe("14")
  })

  it("should return '15' when input 15", () => {
    const input = 15

    const result = fizzbuzz(input)

    expect(result).toBe("FizzBuzz")
  })

  it("should return '30' when input 30", () => {
    const input = 30

    const result = fizzbuzz(input)

    expect(result).toBe("FizzBuzz")
  })
})
