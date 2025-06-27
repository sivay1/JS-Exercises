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


//Ternary operator same like if else change the variable subscribe to check the mechanism
let subscriber =true;

const result = subscriber ? "Welcome" : "Please subscribe";
console.log(result);


let score = 59;

const res = score >=80 ? "Grade: A"
: score >=70 ? "Grade: B"
: score >=60 ? "Grade: C"
:"Grade: D"
console.log(res);