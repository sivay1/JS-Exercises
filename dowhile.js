// let batterylevel = 20;
// do{
//     console.log(`Battery level is ${batterylevel}`);
//     batterylevel += 10;
// }while(batterylevel<100);
// console.log("Battery full.")

let password;
do {
  password = prompt("Enter password (min 6 characters):");
} while (password.length < 6);

alert("Password accepted!");