//Default parameters example
function favmovie(name="24"){
    console.log(`my fav movie is ${name}`);
}
favmovie("kathi"); //it will o/p 24 as name if the function call is empty.Meaning without any names argument



// function add(a,b){
//     console.log(a);
//     console.log(b); //outputs undefined
//     return a+b; // results NaN
// }
// console.log(add(10));

function add(a,b){
    console.log(a); //10
    console.log(b); //undefined
    if(b === undefined){
        return a;
    } 
    return a+b; // Now it result 10 not NaN
}
console.log(add(10));

const myName = "Siva";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

myvar = "123.2122";
console.log(parseFloat(myvar).toFixed()); //NOTE:tofixed converts the number type to string


// function sum(a,b,c){
//     return(a+b);
// }
// console.log(sum(2,2,1,2)); //it accepts 3 argument only ,leaves fourth arg