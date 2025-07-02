function createMinLengthValidator(minLength){
    let failCount = 0;
    function enterValue(name){
        if(name.length >= minLength){
            console.log(`The name "${name}" is valid.`);// Valid name
        }
        else{
            console.log(`The name "${name}" is too short. Minimum length is ${minLength} characters.`);
            failCount++;
            if(failCount >=3){
                console.log("You have failed 3 times. Please try again later.");
            }
        }
    }
    
    function getFailcount(){
        return failCount;
    }
    
    return {enterValue, getFailcount};
    
}

const nameValidator = createMinLengthValidator(5);
nameValidator.enterValue("Siva");
nameValidator.enterValue("Viki");

console.log("Fail count: ", nameValidator.getFailcount());

