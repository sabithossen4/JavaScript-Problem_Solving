// count the number of vowels in a string

function countVowel(str) { 

    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const string = ('programming');
const result = countVowel(string);
console.log(result);