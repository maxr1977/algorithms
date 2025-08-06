/**
 * @param {number} n — неотрицательное целое число
 * @returns {number|undefined} — n-ое число Фибоначчи или undefined для отрицательных n
 */

function fibRecursive(n) {
  if (n < 0) {
    return undefined
  }
  if (n <= 1) {
    return n
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log('Recursive:', fibRecursive(-1))
console.log('Recursive:', fibRecursive(10))

function fibIterative(n) {
  if (n < 0) {
    return undefined
  }

  if (n <= 1) {
    return n
  }
  let a = 0,
    b = 1,
    c
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return b
}

console.log('Iterative:', fibIterative(10))
