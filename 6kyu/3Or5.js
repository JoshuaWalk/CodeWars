const solution = (n) => {
    let sum = 0
    for (i = 0; i < n; i++){
    if ((i % 3 === 0) || (i % 5 ===0 && i % 3 !== 0))
    sum = sum + i
    }
    return sum
  }