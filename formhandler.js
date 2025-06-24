let attempts = 0;
let loggedIn = false;
function submitUser(){
    if (loggedIn || attempts >= 3){
        return;
    }
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    attempts++;
    if(username === "Admin" && password === "1234"){
            loggedIn = true;
            alert("Login success");
        }
    else{
            if(attempts < 3){
                alert("Invalid credentials please try again!..");
            }
            else{
                alert("Too many attempts.. Please try again later.")
                document.getElementById("username").disabled = true;
                document.getElementById("pass").disabled = true;
                document.querySelector("button").disabled = true;
            }
        }
}