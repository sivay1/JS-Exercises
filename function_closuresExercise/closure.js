function outer(){
    
    let counter = 0;
    function inner(){
        counter++;
        console.log("Counter:", counter);
    }
    function getCount(){
        return counter;
    }
    return {inner, getCount};
}
const myClosure = outer();
myClosure.inner();
myClosure.inner();
myClosure.inner();
console.log("Current counter value:", myClosure.getCount());// Output: Current counter value: 3