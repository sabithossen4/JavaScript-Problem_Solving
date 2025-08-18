function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


const s = (5);
const result = factorial(s);
console.log(result);