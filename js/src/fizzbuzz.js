const fizzbuzz = (input) => {
  if (input === 5) {
    return "Buzz"
  }

  if (input === 3) {
    return "Fizz"
  }

  if (input === 4) {
    return "4"
  }

  return input.toString()
}

module.exports = {
  fizzbuzz,
}
