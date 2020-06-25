import { countVowels } from './../src/haiku.js';
import { countSyllables } from './../src/haiku.js';

describe('Haiku checker', () => {

  test('should correctly number of vowels in a word', () => {
    expect(countVowels("moonshine")).toEqual(4);
  });

  test('should correctly subtract any silent vowels', () => {
    expect(countSyllables("moonshine")).toEqual(2);
  });

  test('should correctly count "le" vowel endings', () => {
    expect(countSyllables("fable")).toEqual(2);
  });
});


/* 1. To find the number of syllables:
---count the vowels in the word,
---subtract any silent vowels, (like the silent "e" at the end of a word or the second vowel when two vowels a together in a syllable)
---subtract one vowel from every diphthong, (diphthongs only count as one vowel sound.)
---the number of vowels sounds left is the same as the number of syllables.
The number of syllables that you hear when you pronounce a word is the same as the number of vowels sounds heard. For example:
The word "came" has 2 vowels, but the "e" is silent, leaving one vowel sound andone syllable.
The word "outside" has 4 vowels, but the "e" is silent and the "ou" is a diphthong which counts as only one sound, so this word has only two vowels sounds and therefore, two syllables.

2. Divide between two middle consonants.
Split up words that have two middle consonants. For example:
hap/pen, bas/ket, let/ter, sup/per, din/ner, and Den/nis. The only exceptions are the consonant digraphs. Never split up consonant digraphs as they really represent only one sound. The exceptions are "th", "sh", "ph", "th", "ch", and "wh".

3. Usually divide before a single middle consonant.
When there is only one syllable, you usually divide in front of it, as in:
"o/pen", "i/tem", "e/vil", and "re/port". The only exceptions are those times when the first syllable has an obvious short sound, as in "cab/in".

4. Divide before the consonant before an "-le" syllable.
When you have a word that has the old-style spelling in which the "-le" sounds like "-el", divide before the consonant before the "-le". For example: "a/ble", "fum/ble", "rub/ble" "mum/ble" and "this/tle". The only exception to this are "ckle" words like "tick/le".

5. Divide off any compound words, prefixes, suffixes and roots which have vowel sounds.
Split off the parts of compound words like "sports/car" and "house/boat". Divide off prefixes such at "un/happy", "pre/paid", or "re/write". Also divide off suffixes as in the words "farm/er", "teach/er", "hope/less" and "care/ful". In the word "stop/ping", the suffix is actually "-ping" because this word follows the rule that when you add "-ing" to a word with one syllable, you double the last consonant and add the "-ing". */