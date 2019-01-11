const isSquare = (n) => {
    const squared = Math.sqrt(n)
    if (n < 0 || squared % 1 !== 0) { return false}
    else return true
  } 