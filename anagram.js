// Given two strings s and t, return true if t is an anagram of s, and 
// false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters 
// of a different word or phrase, typically using all the original 
// letters exactly once.

var isAnagram = function(s, t) {
    // Check if the lengths of the two strings are different
    if (s.length !== t.length) {
        return false; // They can't be anagrams if their lengths are different
    }
    
    // Create a character frequency map for string s
    const charFrequencyS = {};
    
    // Iterate through string s and populate the frequency map
    for (const char of s) {
        if (charFrequencyS[char]) {
            charFrequencyS[char]++;
        } else {
            charFrequencyS[char] = 1;
        }
    }
    
    // Iterate through string t and update the frequency map
    // If we find a character in t that's not in the frequency map or its count becomes 0, return false
    for (const char of t) {
        if (!charFrequencyS[char]) {
            return false;
        }
        charFrequencyS[char]--;
    }
    
    // If we've successfully updated the frequency map for t, and all counts are 0, return true
    return Object.values(charFrequencyS).every(count => count === 0);
};

// Example usage:
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t)); // Output: true (t is an anagram of s)
