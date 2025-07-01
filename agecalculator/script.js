
function calculateAge(){
    const birthDateInput = document.getElementById("dob").value;

    const toDateInput = document.getElementById("dob_end").value;

    const birthDate = new Date(birthDateInput);
    const tobirthDate = new Date(toDateInput);
    console.log("Birth Date:", birthDate);

    if(birthDateInput === "" || toDateInput === ""){
        alert("Please enter both dates.");
        
    }
    if(tobirthDate < birthDate){
        alert("The 'To' date must be later than the 'From' date.");
    } 
    else{
        const date = birthDate.getDate();
        const month = birthDate.getMonth() + 1; // Months are zero-based in JavaScript
        const year = birthDate.getFullYear();
        const toDate = tobirthDate.getDate();
        const toMonth = tobirthDate.getMonth() + 1; // Months are zero-based in JavaScript
        const toYear = tobirthDate.getFullYear();
        let age = toYear - year;
        let monthDiff = toMonth - month;
        let dateDiff = toDate - date;
        
    if (dateDiff < 0) {
        dateDiff += 30; // Approximate month as 30 days
        monthDiff -= 1;
    }

    // Adjust months if negative
    if (monthDiff < 0) {
        monthDiff += 12;
        age -= 1;
    }
       
        document.getElementById("result").innerHTML =  `Year: ${age} Month: ${monthDiff} Days: ${dateDiff}`;
    }
    
    //console.log("DOB: ", birthDate.getDate(),birthDate.getMonth()+1,birthDate.getFullYear());
}