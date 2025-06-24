let password = "log@123";
let userinput = "";

while(userinput !== password){
    userinput=prompt("Enter your password: ");
    if(userinput !== password){ 
        console.log("Enter your correct password *** ")
    }
}
console.log("Logged in successfully.")