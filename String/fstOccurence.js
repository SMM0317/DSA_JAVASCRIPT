// Find the Index of the First Occurrence in a String : Leetcode28

// Using JS Method
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

// Using JS Method and the ternary operator
const strgStrg = (haystack, needle) => haystack.indexOf(needle);

// WOL
function strStr(haystack, needle) {
    // Check if the needle is an empty string or longer than the haystack.
    if (needle === "") {
        return 0;
    }
    
    if (needle.length > haystack.length) {
        return -1;
    }

    // Iterate through the haystack with a sliding window of the same length as the needle.
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if the substring of the haystack from the current index
        // to the current index + needle length is equal to the needle.
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    // If the loop completes without finding a match, return -1.
    return -1;
}
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
