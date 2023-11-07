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

// Replace substring
const str = "Nil is Best Frontend Developer. Nil is Best Developer. ";
console.log(str.replace("Nil", "Swapnil")); // "Swapnil is Best Frontend Developer. Nil is Best Developer. "
console.log(str.replaceAll("Nil", "Swapnil")); // "Swapnil is Best Frontend Developer. Swapnil is Best Developer. "

// substring of a string
console.log(str.substring(0,3));  //Nil
console.log(str.slice(0,30)); // Nil is a Best Frontend Developer

// Split and Join
console.log(str.split("",3));  // ['N', 'i', 'l']
const subString = str.split(" ");
console.log(subString.join(" "));

// String Start and End
console.log(str.startsWith("N")); // true
console.log(str.endsWith("")); // true
console.log(str);

// Trim and Case Conversion
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Convert Number and Object to String
const num = 123;
console.log(num, num.toString()); //123 '123

const obj = {
    name: "Nil",
    age: 27,
    course: "DSA with Nil"
};
console.log(obj, JSON.stringify(obj));

// Concatenate Strings
const LastName = "shinde";
console.log(firstName + LastName); //swapnilshinde
console.log(`${firstName} ${LastName} is a Best Developer`); //swapnil shinde is a best developer
console.log(firstName.concat(LastName, " is a", " Best"));