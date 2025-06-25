function trimAndLower(text){
    return text.trim().toLowerCase();
}
function capitalizeFirst(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function cleanInappropriateWords(text){
    return text
        .replaceAll("stupid", "***")
        .replaceAll("dumb", "***");
}

function checkname(){
    let username = document.getElementById("name").value;
    let useremail = document.getElementById("mail").value;
    let usermessage = document.getElementById("message").value;

    if(username){
        // let trimmed = username.trim().toLowerCase();
        // let formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        let trimmed = trimAndLower(username);
        let formattedName = capitalizeFirst(trimmed);
        console.log(formattedName);
        console.log(formattedName.length);
        document.getElementById("printname").innerHTML = "Username: " +formattedName;
    
    
    }
    if(useremail){
        let cleanedEmail = useremail.trim().toLowerCase();
        if(cleanedEmail.includes("@") && cleanedEmail.includes(".")){
            console.log("Email added");
            console.log("mail: " +cleanedEmail);
            document.getElementById("printmail").innerHTML = "Email: " +cleanedEmail;
        }
        else{
            document.getElementById("printname").innerHTML = "Email format is invalid";
            console.log("Invalid email")
        }
    }
    if(usermessage){
        let cleanedMessage = cleanInappropriateWords(usermessage.trim());
        console.log(cleanedMessage);
        document.getElementById("printmessage").innerHTML = "Message: " +cleanedMessage;
    }
}