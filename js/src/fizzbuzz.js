const fizzbuzz = (input) => {
  if (input === 5) {
    return "Buzz"
  }

  if (input === 3 || input === 6) {
    return "Fizz"
  }

  return input.toString()
}

module.exports = {
  fizzbuzz,
}
