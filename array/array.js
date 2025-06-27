// let myArray = ["a","b","c","d"];

// console.log(myArray[2]);
// console.log(typeof myArray);

// myArray[4]="e";
// myArray[5]=1;
// myArray[6]=true;
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);

// console.log("Last item of an array: " +myArray[myArray.length-1]); //used to access last item of an array.

// const lastItem = myArray.unshift("siva"); //Adds element to the front of the array.
// console.log(lastItem); //if we add new element to an array and store it to a varibale it will give the length if the array.

// cars = ["bmw","ferrari","audi"];

// console.log(cars.splice(1,1,"newcar"));//This method updates the new element name in the given index position
// // console.log(cars.splice(1,1));//Used to remove the elements from between first value is index position of what to remove and second value defines the Torange to be removed.


// console.log(cars);



// myarray = ["one",2,3];

// for(i=0;i<myarray.length;i++){
//     console.log(myarray[i]); //loop used to print the array values .
// }//output:one 2 3 one by one.

// myarray = [
//     {name:"siva",age:20},
//     {name:"viki",age:21},
//     {name:"vignesh",age:22},
//     {name:"muthu",age:23}
// ];
// for(i=0;i<myarray.length;i++){
//     console.log("Name: "+myarray[i].name);
//     console.log("Age: "+myarray[i].age);
//     //output:
//     // Name: Siva
//     // Age: 20
// // Name: viki
// // Age: 21
// // Name: vignesh
// // Age: 22
// // Name: muthu
// // Age: 23
// }

// //Slicing an array
// const arr = ['a','b','c','d','e'];

// const newArr = arr.slice(0);//Using slice we can create a new array by cutting an existing array.
// // By passing the start index and end index NOTE: the end index value will not be included in the arry it skips the mentioned ending index number and prints remaining before the end index.
// console.log(newArr);

// //join method to CONVERT AN ARRAY to STRING. & split() to CONVERT STRING to ARRAY using comma as separator.
// const joinExample = ['a','b','c','d','e'];
// const newJoin = joinExample.join();
// console.log("array to string: "+newJoin); //a,b,c,d,e type:string

// const toArray = newJoin.split(',');//NOTE:It if we take a cope from an array and that array had multiple data types the split converts all of them into a string data type
// console.log("String to array: " ,toArray); //String to array:  [ 'a', 'b', 'c', 'd', 'e' ] type:object

const arr1 = [1,2,3,"a",true];
const arr2 = [4,5,6,"b",false];

const addArrays = arr1.concat(arr2);
const arrayShelf = [arr1,arr2];
console.log(arrayShelf);
console.log(arrayShelf[0][3]); //accessing 2D array;
console.log(addArrays);






