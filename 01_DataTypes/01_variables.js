let score = "33";
let score2 = "33abc";   // if also "undefined", Number conversion will give "NaN"
let score3 = null;

let valueInInt = Number(score);
let valueInInt2 = Number(score2);
let valueInInt3 = Number(score3);

// console.log(typeof valueInInt);
// console.log(valueInInt);

// console.log(typeof valueInInt2);
// console.log(valueInInt2);

// console.log(typeof valueInInt3);
// console.log(valueInInt3);

let isLoggedIn = 1
let isBooleanLoggedIn = Boolean(isLoggedIn)
// console.log(isBooleanLoggedIn);

// 1 => true, 0 => false
// "" => false
// "sidhanta" => true

// ********************************** Operations ***************************************

// console.log(1+"2");  // 12
// console.log("1"+2);  // 12
// console.log("1"+"2");// 12
// console.log("1"+2+2);// 122
// console.log(1+2+"2");// 32

// console.log(true);  //  true
// console.log(+true); //  1 (Conerts)
// // console.log(true+); //  Error

// console.log(""); // Empty String
// console.log(+""); // 0 (Converts)