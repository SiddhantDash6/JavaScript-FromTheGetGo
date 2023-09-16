// console.log("1" > 2);   // cONVERTS INTERNALLY TO "NUMBER" AND COMPARES
// console.log("2" > 1);  // cONVERTS INTERNALLY TO "NUMBER" AND COMPARES
// console.log("02" > 1);
// console.log("01" > 2);
// console.log("010" > "100");

// Equality("==") doesn't convert null to a number whereAS Comparison does(">=, <. <=, >") 
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// for undefined it doesn't happen
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);