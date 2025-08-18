function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}



const s = ([1, 2, 3, 4]);
const result = sumArray(s);
console.log(result);