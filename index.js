function isPalindrome(word) {
  // Write your algorithm here
  const lowerCasedWord = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (lowerCasedWord[left] !== lowerCasedWord[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

/* 
  Add your pseudocode here
  create two flags, LEFT and RIGHT
  LEFT FLAG tracks character position from front and RIGHT flag vice versa
  Loop through the word characters and comparing right flag and left flag positions if their
  characters are equal, if they are not equal return false, otherwise continue looping until
  while incrementing left flag and decrementing right flag. The loop ends when left is greater 
  than right
  At the end of looping returns true. The word is a  Palindrome
*/

/*
  Add written explanation of your solution here
  Palindrome is a word that when characters are compared from both sides are equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
