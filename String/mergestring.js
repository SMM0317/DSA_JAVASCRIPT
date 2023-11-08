// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

/**
 * Merges two strings in alternating order, starting with `word1`.
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
    // Initialize an array to build the merged string.
    let result = [];
    // Find the minimum length between the two input strings.
    const minLength = Math.min(word1.length, word2.length);
  
    // Iterate through the common characters of both strings.
    for (let i = 0; i < minLength; i++) {
      result.push(word1[i], word2[i]); // Add characters alternately to the result array.
    }
  
    // Append any remaining characters from both strings (if any).
    result.push(word1.slice(minLength)); // Append the remaining characters of word1.
    result.push(word2.slice(minLength)); // Append the remaining characters of word2.
  
    // Join the characters in the result array to form the merged string and return it.
    return result.join('');
  }  
  
  // Example usage:
  const mergedString = mergeAlternately("abc", "jklmn");
  console.log(mergedString); // Output: "a1b2c345"