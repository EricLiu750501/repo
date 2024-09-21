// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
    // TODO: # 有特別的意思嗎？請以註解回覆。
    // # 表示他在class裡面是一個private的變數 (Private Fields)
    #items;

    constructor() {
        this.#items = [];
    }

    // 在 stack 頂部加入元素i
    push(element) {
        this.#items.push(element);
    }

    // 移除並返回 stack 頂部的元素
    pop() {
        if (this.isEmpty()) {
            console.error("Stack is empty");
            return 0;
        }
        return this.#items.pop();
    }

    // 返回 stack 頂部的元素，但不移除它
    peek() {
        if (this.isEmpty()) {
            console.error("Stack is empty");
            return 0;
        }
        return this.#items[this.#items.length-1];
    }

    // 檢查 stack 是否為空
    isEmpty() {
        return this.size() == 0;
    }

    // 返回 stack 中元素的個數
    size() {
        return this.#items.length-1;
    }

    // 清空 stack 
    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }

    // 打印 stack 內容（可選）
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
        }
        else {
            this.#items.forEach(ele => console.log(ele));
        }
    }
}

