// function reverseWords(s){
//     splitString = s.split(" ");
//     const stack = [];
    
//     for(let i of splitString){
//         stack.push(i);
//     }
//     let finalS = ""
//     while(stack.length){
//         const current = stack.pop()
//         if(current){
//             finalS += " " + current;
//         }
        
//     }
//     return finalS.trim();
// };
// console.log(reverseWords("sky a is blue   "))

class Stack{
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.stack.pop()
        
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.stack[this.size() - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }
    printStack(){
        return this.stack
    }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.pop()
console.log(newStack.peek());
console.log(newStack.printStack());