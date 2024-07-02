const factorial = function(num) {
  const arr = []
  for (let i = num; i > 0; i--) {
    arr.push(i)
  }
  return arr.reduce((acc, curr) => acc * curr)
}

console.log(factorial(5))