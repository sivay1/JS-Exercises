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
