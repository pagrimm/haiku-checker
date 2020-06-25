export function Haiku(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

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
  if (word[word.length -1] === "e" && word[word.length-2] !== "l") {
    syllables --;
  } 
  for (let i = 0; i < word.length; i ++) {
    if (isCharVowel(word[i]) && isCharVowel(word[i + 1])) {
      syllables --;
    }
  }
  return syllables;
}