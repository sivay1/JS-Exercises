
const myArray = [];
function addExpense(){
    

    const description = document.getElementById("description").value;
    const expense = document.getElementById("expense").value;
    const Amount = parseFloat(expense);

    if(description && expense){
        myArray.push({description: description, amount: expense});
        let output = "";
        for(let i=0;i<myArray.length;i++){
            output += `<li>${myArray[i].description} : ${myArray[i].amount}</li>`;
        }
        document.getElementById("result").innerHTML=`<ul>${output}</ul>`;
        
    }
    console.log(myArray)

}

function calculateTotal(){
    let total = 0;
    for(let i=0;i<myArray.length;i++){
        total += parseFloat(myArray[i].amount);
    }
    document.getElementById("total").innerHTML=`Total: ${total}`;
}
    