// function revealname(){
//     document.getElementById("myname").innerHTML="Siva";
// }

function calculatebmi(){
    let weightInput = prompt("Enter your weight in kg: ");
    let heightInput = prompt("Enter your height in cm: ");

    let weightkg = parseFloat(weightInput);
    let heightcm = parseFloat(heightInput);

    let height = heightcm / 100;

    let bmi = weightkg / height ** 2;

    document.getElementById("result").innerHTML= `Your BMI is ${bmi.toFixed(2)}`;
    
    const LOW = 18.5
    const NORMALMAX = 24.9
    const OVERWEIGHT = 25


    if (bmi < LOW){
        document.getElementById("status").innerHTML="Under weight";
    }
    else if (bmi >= LOW && bmi<= NORMALMAX){
        document.getElementById("status").innerHTML="Normal weight";
    }
    else if (bmi > NORMALMAX && bmi <= OVERWEIGHT){
        document.getElementById("status").innerHTML="Over weight";
    }
    else{
        document.getElementById("status").innerHTML="Obese"
    }
}