
const myArray = [];

function addExpense(){
    
    const description = document.getElementById("description").value;
    const expense = document.getElementById("expense").value;
    const amount = parseFloat(expense);

    if (description && expense) {
        myArray.push({ 
            title: description, 
            amount: amount,
            createdAt: new Date()
          }); 
        document.getElementById("description").value = "";
        document.getElementById("expense").value = "";
        calculateTotal();
        let output = "";
        for(let i=0;i<myArray.length;i++){
            output += `<li>${myArray[i].title} : ${myArray[i].amount} : ${myArray[i].createdAt}<button onclick="deleteExpense(${i})">Delete</button></li> `;
        }
        document.getElementById("result").innerHTML=`<ul>${output}</ul> `;
        
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

function deleteExpense(index){
    myArray.splice(index, 1);
    calculateTotal();
    let output = "";
    for(let i=0;i<myArray.length;i++){
        output += `<li>${myArray[i].title} : ${myArray[i].amount} <button onclick="deleteExpense(${i})">Delete</button> </li>`;
    }
    document.getElementById("result").innerHTML=`<ul>${output}</ul> `;
   
}