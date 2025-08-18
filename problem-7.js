function findEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}


const s = ([1, 2, 3, 4, 5, 6]);
const result = findEvenNumbers(s);
console.log(result);