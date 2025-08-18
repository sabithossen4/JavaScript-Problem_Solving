function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Test
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

const s = ('hello');
const result = isPalindrome(s);
console.log(result);

// Test
// "madam" // true
// "hello" // false