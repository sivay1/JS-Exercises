const myMap = new Map();
myMap.set("d", 4);
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

console.log(myMap); // Output: Map(4) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }

console.log(myMap.forEach((key, value) => {
    console.log(`${key} : ${value}`);
})); // Output: a : 1 b : 2 c : 3 d :

for(let [k,v] of myMap){
    console.log(v);
}

numbers = [1,2,3,4,5];

const doubledNumbers = numbers.map(function(number){
    return number*2;// Double each number
})
console.log(numbers);// Output: [1, 2, 3, 4, 5]
console.log(doubledNumbers);// Output: [2, 4, 6, 8, 10]

//FILTER FUNCTION
numbers = [1,2,3,4,5];

const evenNumbers = numbers.filter(function(number){
    return number%2 == 0;// Filter even numbers
})
console.log(numbers);// Output: [1, 2, 3, 4, 5]
console.log(doubledNumbers);// Output: [2, 4]


const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.forEach((value, key) => {
  console.log(`${key}: ${value}`);
}); // Output: apples: 500, bananas: 300, oranges: 200

for(let [key,value] of fruits){
    console.log(`${key}: ${value}`);
}