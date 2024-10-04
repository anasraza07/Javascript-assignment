// // Week 1: Strings
// // Day 1: Reverse a String
// // Question: Write a function that takes a string as input and returns the string reversed.

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
//     return str.split('').reverse().join('');
// };
// console.log(reverseString('hello'));
// console.log(reverseString('world'));
// console.log(reverseString('javascript'));
// console.log(reverseString('racecar'));


// Day 2: Check for Anagrams
// Question: Write a function that checks if two strings are anagrams of each other (contain the same characters in a different order).

// Input: "listen", "silent"
// Output: true

// function areAnagrams(str1, str2) {
//     if (str1.length != str2.length) return false;
//     const count1 = {};
//     const count2 = {};
//     for (let i = 0; i < str1.length; i++) {
//         count1[str1[i]] = (count1[str1[i]] || 0) + 1;
//     }

//     for (let j = 0; j < str2.length; j++) {
//         count2[str2[j]] = (count2[str2[j]] || 0) + 1;
//     }

//     if (Object.keys(count1).length !== Object.keys(count2).length) return false;
//     for (let key in count1) {
//         if (!count2.hasOwnProperty(key) || count1[key] !== count2[key]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("triangle", "integral")); // true
// console.log(areAnagrams("apple", "pale")); // false

// // using methods:
// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 !== sortedStr2 ? false : true;
// }
// console.log(areAnagrams("abcd", "dcba")); // true
// console.log(areAnagrams("abc", "ab")); // false


// Day 2: Palindrome Check
// Question: Write a function to check if a given string is a palindrome (reads the same forward and backward).

// Input: "racecar"
// Output: true

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     let reverseStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr === str;
// }

// // using methods:
// function isPalindrome(str) {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
// }
// console.log(isPalindrome('racecar'));


// Day 4: Substrings
// Question: Write a function to find all substrings of a given string.

// Example:

// Input: "abc"
// Output: ["a", "ab", "abc", "b", "bc", "c"]
// Pseudocode:

// Define a function getSubstrings(s).
// Initialize an empty array substrings.
// Loop through the string with two nested loops.
// For each combination of indices, extract the substring and add it to substrings.
// Return the substrings array.


// Week 01:
// Day 01:
// Question:
// Example:
// Input:
// Output:
// Pseudocode:
// Concept:
