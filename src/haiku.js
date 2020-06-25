export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkSyllables(line) {
    let haikuLineArray = this[line].split(" ");
    let syllableCount = 0;

    for (let i = 0; i < haikuLineArray.length; i++) {
      syllableCount += countSyllables(haikuLineArray[i]);
    }

    return syllableCount;
  }
}


export function countVowels(word) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count ++;
    }
  }
  return count;
}

function isCharVowel(char) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}

export function countSyllables (word) {
  let syllables = countVowels(word);
  word = word.toLowerCase();
  if (syllables > 1) {
    if ((word[word.length - 1]) === "e" && (word[word.length - 2]) !== "l" && !(isCharVowel(word[word.length - 2])) || word.slice(word.length - 2) === "es") {
      syllables --;
    }
  }
  for (let i = 0; i < word.length; i ++) {
    if (isCharVowel(word[i]) && isCharVowel(word[i + 1])) {
      syllables --;
    }
  }
  return syllables;
}