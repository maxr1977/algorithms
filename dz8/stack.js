class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.empty()) {
      return null;
    }
    return this.items.pop();
  }

  empty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.empty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  search(element) {
    const index = this.items.lastIndexOf(element);
    if (index !== -1) {
      return this.items.length - index;
    }
    return -1;
  }
  
  print() {
    console.log(this.items.toString());
  }
}

const myStack = new Stack();

console.log("Стек пуст?", myStack.empty()); 

console.log("Добавляем элементы:");
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.print(); 

console.log("Верхний элемент (peek):", myStack.peek()); 
myStack.print(); 

console.log("Ищем элемент '20'. Позиция от вершины:", myStack.search(20)); 
console.log("Ищем элемент '10'. Позиция от вершины:", myStack.search(10)); 
console.log("Ищем элемент '99':", myStack.search(99)); 

console.log("Удаляем элемент:", myStack.pop()); 
myStack.print(); 

console.log("Стек пуст?", myStack.empty()); 

myStack.pop();
myStack.pop();

console.log("Стек после удаления всех элементов:");
myStack.print(); 
console.log("Стек пуст?", myStack.empty()); 