const number = (busRoute) => {
    let total = 0
    const reducer = (a, b) => a - b
    for (i = 0; i = busRoute.length; i++) {
      let transfer = busRoute.shift()
      let sum = transfer.reduce(reducer)
      total += sum
    }
    return total
  }
  