const fizzbuzz = (input) => {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz"
  }

  if (input % 5 === 0) {
    return "Buzz"
  }

  if (input % 3 === 0) {
    return "Fizz"
  }

  return input.toString()
}

module.exports = {
  fizzbuzz,
}
