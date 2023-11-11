// ?leetcode 796 :https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = s.length - 1;
    const chars = s.split('');
  
    while (left < right) {
      while (left < right && !vowels.has(chars[left])) {
        left++;
      }
  
      while (left < right && !vowels.has(chars[right])) {
        right--;
      }
  
      // Swap the vowels at the left and right pointers
      [chars[left], chars[right]] = [chars[right], chars[left]];
  
      left++;
      right--;
    }
  
    return chars.join('');
  };
  