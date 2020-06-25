export function countVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count ++;
    }
  }
  return count;
}

function isCharVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}

export function countSyllables (word) {
  let syllables = countVowels(word);
  if (word[word.length -1] === "e") {
    syllables --;
  }
  for (let i = 0; i < word.length; i ++) {
    if (isCharVowel(word[i]) && isCharVowel(word[i + 1])) {
      syllables --;
    }
  }
  return syllables;
}