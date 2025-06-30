const arrayOne = [1, 2, 3, 4, 5,5];
const arrayTwo = [6, 7, 8, 9, 10,1];

const mergedArray = arrayOne.concat(arrayTwo);
console.log("Merged: ",mergedArray); // Output: [1, 2, 3,
console.log(mergedArray.length); // Output: 10

const uniqueArray = [...new Set(mergedArray)];
console.log("Without duplicates:",uniqueArray); // Output: Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }