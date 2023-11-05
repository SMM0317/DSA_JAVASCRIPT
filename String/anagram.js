  //  ?Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  //  ? An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Using built-in methods
// In Solution 1, we use the built-in split, sort, and join methods to sort the characters in both strings and then compare them. If the sorted strings are the same, the original strings are anagrams.
function isAnagram(str1, str2) {
  // Sort both strings and compare them
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

const result1 = isAnagram("listen", "silent");
console.log(result1); // true

const result2 = isAnagram("hello", "world");
console.log(result2); // false

// Using own optimal logic
// In Solution 2, we use a more efficient approach. We create an object (charCount) to count the occurrences of each character in the first string. Then, we iterate through the second string and decrement the counts in charCount. If at any point, the count becomes negative or a character is missing in charCount, we know the strings are not anagrams. Otherwise, they are anagrams.
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char] -= 1;
  }

  return true;
}

const resulti = isAnagram("listen", "silent");
console.log(resulti); // true

const resultj = isAnagram("hello", "world");
console.log(resultj); // false


// However, we can further optimize the space usage by eliminating the need for the charCount object and use arrays instead to count character occurrences. 
// In this optimized solution, we use an array of 26 elements to represent the count of lowercase English letters (a-z). We use the character codes to map characters to their respective index in the array. When we iterate through both strings, we increment the count for characters in the first string and decrement the count for characters in the second string. Finally, we check if all counts in the array are zero to determine if the strings are anagrams.

// This approach reduces the space usage compared to the object-based solution and is still very efficient in terms of speed and space for the specific case of English lowercase letters 
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = new Array(26).fill(0); // Assuming lowercase English letters
  
    for (let i = 0; i < str1.length; i++) {
      charCount[str1.charCodeAt(i) - 97]++; // Convert character to index (0-25)
      charCount[str2.charCodeAt(i) - 97]--; // Decrement for the second string
    }
  
    for (let count of charCount) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const resultA1 = isAnagram("listen", "silent");
  console.log(resultA1); // true
  
  const resultA2 = isAnagram("hello", "world");
  console.log(resultA2); // false


  