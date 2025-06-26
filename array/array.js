let myArray = ["a","b","c","d"];

console.log(myArray[2]);
console.log(typeof myArray);

myArray[4]="e";
myArray[5]=1;
myArray[6]=true;
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);

console.log("Last item of an array: " +myArray[myArray.length-1]); //used to access last item of an array.

const lastItem = myArray.unshift("siva"); //Adds element to the front of the array.
console.log(lastItem); //if we add new element to an array and store it to a varibale it will give the length if the array.

cars = ["bmw","ferrari","audi"];

console.log(cars.splice(1,1,"newcar"));//This method updates the new element name in the given index position
// console.log(cars.splice(1,1));//Used to remove the elements from between first value is index position of what to remove and second value defines the Torange to be removed.


console.log(cars);


myarray = ["one",2,3];

for(i=0;i<myarray.length;i++){
    console.log(myarray[i]); //loop used to print the array values .
}//output:one 2 3 one by one.

myarray = [
    {name:"siva",age:20},
    {name:"viki",age:21},
    {name:"vignesh",age:22},
    {name:"muthu",age:23}
];
for(i=0;i<myarray.length;i++){
    console.log("Name: "+myarray[i].name);
    console.log("Age: "+myarray[i].age);
    
}










