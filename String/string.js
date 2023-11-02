// Length of a String
let firstName = "swapnil";
console.log(firstName.length);

// Access String Element
console.log(firstName.charAt(0));
console.log(firstName[1]);
console.log(firstName.charCodeAt(2));   //ASCII Code

// Check Presence of Character
console.log(firstName.includes("s")); // false (& if present it return true)
console.log(firstName.indexOf("z")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7 

const charToCheck = "o";
const regex = new RegExp(charToCheck);
if (regex.test(firstName)) {
  console.log(`"${charToCheck}" is present in the string.`);
} else {
  console.log(`"${charToCheck}" is not present in the string.`);
}
// console.log(regex.test(firstName));

// Compare Two Strings
let lastName = "manale";
console.log(`Strict: ${firstName === lastName}`); // Strict Comparison
console.log(`Case-Insensitive: ${firstName.toLowerCase() === lastName.toLowerCase()}`); // Case-Insensitive: true
console.log(firstName.localeCompare(lastName)); // -1 (& if strings are equal it return 0)

