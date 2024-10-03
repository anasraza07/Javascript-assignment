// // Week 1: Strings
// // Day 1: Reverse a String
// // Question: Write a function that takes a string as input and returns the string reversed.

// // Example:

// // Input: "hello"
// // Output: "olleh"

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     };

//     return reversed
// };

// // using methods:
// function reverseString(str) {
//     // let reversed = '';
//     return str.split('').reverse().join('');
//     // return str;
// };
// console.log(reverseString('hello'));
// console.log(reverseString('world'));
// console.log(reverseString('javascript'));
// console.log(reverseString('racecar'));


// Day 2: Check for Anagrams
// Question: Write a function that checks if two strings are anagrams of each other (contain the same characters in a different order).

// Example:

// Input: "listen", "silent"
// Output: true

function areAnagrams(str1, str2) {
    if (str1.length != str2.length) return false

    const count1 = {};
    const count2 = {};

    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    }

    for (let j = 0; j < str2.length; j++) {
        count2[str2[j]] = (count2[str2[j]] || 0) + 1;
    }

    if (Object.keys(count1).length !== Object.keys(count2).length) return false;

    for (let key in count1) {
        if (!count2.hasOwnProperty(key) || count1[key] !== count2[key]) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
console.log(areAnagrams("abcd", "dcba")); // true
console.log(areAnagrams("abc", "ab")); // false


// Pseudocode (with loops):
// Define a function areAnagrams(s1, s2).
// If the lengths of s1 and s2 are not the same, return False.
// Initialize two dictionaries count1 and count2 to store character counts for s1 and s2.
// Loop through both strings:
// For each character in s1, increment its count in count1.
// For each character in s2, increment its count in count2.
// Compare the two dictionaries:
// If they are the same, return True.
// Otherwise, return False.

// Pseudocode (with methods):
// Define a function areAnagrams(s1, s2).
// If the lengths of s1 and s2 are not the same, return False.
// Sort both strings using sorted() (or split("").sort().join("") in JavaScript).
// Compare the sorted versions:
// If they are equal, return True.
// Otherwise, return False.





// Week 01:
// Day 01:
// Question:
// Example:
// Input:
// Output:
// Pseudocode:
// Concept:
