function countVowel(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let count = 0;
  word = word.toLowerCase(); 
  for (let char of word) {
      if (vowels.includes(char)) {
          count++;
      }
  }
  return count;
}

function isPalindrome(word) {
  word = word.toLowerCase(); 
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

function analyzeWord(word) {
  const numVowels = countVowel(word);
  const palindrome = isPalindrome(word);

  return [numVowels, palindrome];
}

const userWord = prompt("Enter word: ");

const [numVowels, palindrome] = analyzeWord(userWord);

if (palindrome) {
  console.log(`${userWord} contains ${numVowels} vowels and is a palindrome`);
} else {
  console.log(`${userWord} contains ${numVowels} vowels and is not a palindrome`);
}
