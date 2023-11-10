// ?leetcode 796 : https://leetcode.com/problems/rotate-string/

var rotateString = function(s, goal) {
    // Check if the lengths of s and goal are equal
    if (s.length !== goal.length) {
      return false;
    }
  
    // Concatenate s with itself to create a string with all possible rotations
    const concatenated = s + s;
  
    // Check if goal is present in the concatenated string
    return concatenated.includes(goal);
  };
  