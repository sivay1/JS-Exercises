let x = "abcdefabc ";

//space also calculated as extra character
console.log("Length in the variable x is: " +x.length);

console.log("I am printing what value is in the index position mentioned in charAt: " +x.charAt(4));

//NOTE: it prints only the first occurence of the value , the second occurence of that value won't be considered
console.log("im printing the index value of mentioned value: Index value is: " +x.indexOf("abc"));

console.log("im printing the last index value of mentioned value: last Index value is: " +x.lastIndexOf("abc"));

let value = "lets learn JS";
// this outputs value as array and uses space as separator so each word is separted in the array
console.log(value.split(' '));
