// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
  
    let commonPrefix = "";
    let minLength = Math.min(...strs.map(str => str.length));
  
    for (let i = 0; i < minLength; i++) {
      const charToMatch = strs[0][i];
  
      if (strs.every(str => str[i] === charToMatch)) {
        commonPrefix += charToMatch;
      } else {
        break;
      }
    }
  
    return commonPrefix;
  }
  
  // Example usage:
  const strings = ["flower", "flour", "florence"];
  const result = longestCommonPrefix(strings);
  console.log(result); // Output: "flo"
  
/*  Here's how the function works:
First, it checks if the input array strs is empty. If it is, it returns an empty string since there is no common prefix to find.
It initializes an empty string commonPrefix to store the common prefix and finds the minimum length among the strings in the array.
It then iterates through the characters at each position, starting from the first character (index 0) to the minimum length.
For each character position, it checks if all strings have the same character at that position using the every method. If they do, it appends that character to the commonPrefix. If not, it breaks out of the loop.
Finally, it returns the commonPrefix string, which contains the longest common prefix among the input strings.
In the example provided, the function finds that the longest common prefix among "flower," "flour," and "florence" is "flo," and it returns that as the result.*/