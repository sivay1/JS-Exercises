
// items = ["apple","banana","cat"]

// for(let i=0;i<items.length;i++){
//     console.log("Items in the array: "+ i  + items[i]);
// }

// //timer
// for (let i = 10; i >= 1; i--) {
//     console.log(`Countdown: ${i}`);
// }
// const n = 5;
// for(let i=1;i<=n;i++){
//     row = "";
//     for(let j=1;j<=i;j++){
//         row+="*";
//     }
//     console.log(row);
// }

const m = 5;
for(let i=1;i<=m;i++){
    let row = "";
    for(let j=1;j<=m-i;j++){
        row+="  ";
    }
    for(let k=1;k<=2*i-1;k++){
        row+="* ";
    }
console.log(row);   
}