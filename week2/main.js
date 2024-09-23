// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();

// 基本function測試
console.log("----Test1----")

stack.print(); //Stack is empty

stack.push(5); // push 5 into stack
stack.push(8); // push 8 into stack
stack.push(16); // push 16 into stack

stack.print(); // 5, 8, 16
console.log(stack.peek()); // 16

console.log(stack.isEmpty()); // false

console.log(stack.pop()); // 16
stack.print() // 5, 8
console.log(stack.size()); // 2

stack.push(2);
stack.push(54);
stack.pop();
stack.push(99);
stack.print(); // 5, 8, 2, 99

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？


// 確保stack空了不會吐出奇怪的東西
console.log("----Test2----")
stack.clear()
stack.pop() // Error message : Stack is empty
stack.peek() //Error message: Stack is empty
stack.print() //Stack is empty
