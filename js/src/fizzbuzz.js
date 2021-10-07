const fizzbuzz = (input) => {
  if (input === 5) {
    return "Buzz"
  }

  if (input === 3) {
    return "Fizz"
  }

  return input.toString()
}

module.exports = {
  fizzbuzz,
}
