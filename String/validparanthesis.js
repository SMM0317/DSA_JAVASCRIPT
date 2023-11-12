// ?leetcode 20 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
  const stack = [];
  const bracketPairs = { '(': ')', '[': ']', '{': '}' };

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (bracketPairs[currentBracket]) {
      // If it's an opening bracket, push it onto the stack
      stack.push(currentBracket);
    } else {
      // If it's a closing bracket, check if it matches the top of the stack
      const lastBracket = stack.pop();

      if (bracketPairs[lastBracket] !== currentBracket) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are matched
  return stack.length === 0;
};

// Example 1:
console.log(isValid("()")); // Output: true

// Example 2:
console.log(isValid("()[]{}")); // Output: true

// Example 3:
console.log(isValid("(]")); // Output: false