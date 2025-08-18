function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const s = ([5, 1, 9, 3]);
const result = findMax(s);
console.log(result);