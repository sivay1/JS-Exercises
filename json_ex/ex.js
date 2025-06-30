let json_string = '{"name":"John", "age":30, "city":"New York"}';

const json_obj  = JSON.parse(json_string);

console.log(json_obj.name); // John
console.log(json_obj.age);  // 30
console.log(json_obj.city); // New York
console.log(typeof json_obj.age);// number
console.log(typeof json_string);// string

//When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);// ["Ford", "BMW", "Audi", "Fiat"]
console.log(typeof myArr);// object
console.log(myArr[3]);// Fiat

const newText = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(newText);// {name: "John", birth: "1986-12-14", city: "New York"}
obj.birth = new Date(obj.birth);
console.log(obj.birth); // 1986