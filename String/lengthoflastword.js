// ?leetcode 58 : https://leetcode.com/problems/length-of-last-word/
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    debugger;
    // Trim any trailing and leading whitespaces from the input string.
    s = s.trim();
  console.log(s);
    // Initialize a variable to store the length of the last word.
    let lastWordLength = 0;
  
    // Iterate through the characters in the string.
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        // Reset the lastWordLength if a space is encountered.
        lastWordLength = 0;
      } else {
        // Increment the lastWordLength for non-space characters.
        lastWordLength++;
      }
    }
  
    // The lastWordLength now contains the length of the last word.
    console.log(lastWordLength);
    return lastWordLength;
  };
  
  const mergedString = lengthOfLastWord("Hello World");


// !Time and Space Complexity:
// Time Complexity: O(n) -  The algorithm iterates through the characters of the string once.
// Space Complexity: O(1) - The space used is constant, as we only use a few variables regardless of the input size.