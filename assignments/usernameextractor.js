//Function to extract the username from the given email id.

function extractUserName(name){
    const username = name.trim().split("@"); //We get output as array 
    const fullname = username[0]; //So accessing the first value using index position
    //console.log(username);
    console.log(fullname); //outputs string siva
    //console.log(typeof fullname);
}

//This can be done using slice()  method as well using .slice(0,indexOf("@"))
//,which starts from 0 and stops before @.

extractUserName("siva@gmail.com");
extractUserName("viki@gmail.com");
extractUserName("vignesh@gmail.com");
extractUserName("selva@gmail.com");
extractUserName("mathi@gmail.com");
extractUserName("abi@gmail.com");
extractUserName("venki@gmail.com");
