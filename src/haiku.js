export function countVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count ++;
    }
  }
}