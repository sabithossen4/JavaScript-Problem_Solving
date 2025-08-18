function removeDuplicates(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}


const s = ([1, 2, 2, 3, 4, 4]);
const result = removeDuplicates(s);
console.log(result);