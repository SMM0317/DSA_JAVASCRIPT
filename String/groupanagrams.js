// ?leetcode 49: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// ?An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// https://leetcode.com/problems/group-anagrams/description

var groupAnagrams = function(strs) {
    const anagramGroups = new Map();
  
    for (const str of strs) {
      // Sort the string to create a unique key for anagrams
      const sortedStr = str.split('').sort().join('');
  
      // Check if the key exists in the map
      if (anagramGroups.has(sortedStr)) {
        // If it exists, add the current string to the existing group
        anagramGroups.get(sortedStr).push(str);
      } else {
        // If it doesn't exist, create a new group with the current string
        anagramGroups.set(sortedStr, [str]);
      }
    }
  
    // Convert the map values to an array to get the final result
    return Array.from(anagramGroups.values());
  };

  console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));