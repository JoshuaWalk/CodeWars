const countAnimals = (s) => {
    const zero = s + 'and 0'
    const numbers = zero.match(/\d+/g).map(Number) 
    const add = (a, b) => a + b
    const total = numbers.reduce(add)
    return total
  }
  