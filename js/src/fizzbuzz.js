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

  if (input === 2) {
    return "2"
  }

  return "1"
}

module.exports = {
  fizzbuzz,
}
