age = 22;

hasLicense = true;

if(age>=18){
    console.log("You are allowed to drive.")

    if(hasLicense){
        console.log("You have license")
    }
    else{
        console.log("You do not have license")
    }
}
else{
    console.log("you must be 18+ to drive")
}