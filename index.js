function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome(word) {
    const lowercaseWord = word.toLowerCase();
  
    let leftPointer = 0;
    let rightPointer = lowercaseWord.length - 1;
  
    while (leftPointer < rightPointer) {
      if (lowercaseWord[leftPointer] !== lowercaseWord[rightPointer]) {
        return false;
      }
  
      leftPointer++;
      rightPointer--;
    }
  
    return true;
  }

/* 
  Add your pseudocode here
  1. Convert the input word to lowercase.
2. Initialize two pointers, leftPointer at 0 and rightPointer at the end of the word.
3. Iterate while leftPointer is less than rightPointer:
   a. If characters at leftPointer and rightPointer are different, return false.
   b. Move leftPointer and decrement rightPointer.
4. If the loop completes, return true (word is a palindrome).
*/


/*
  Add written explanation of your solution here
  - We use two pointers starting from the beginning and end of the word and compare characters.
  - If characters at the pointers are different, the word is not a palindrome.
  - We continue this process until the pointers meet in the middle.
  - If the loop completes without returning false, the word is a palindrome.

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("ab"));
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
