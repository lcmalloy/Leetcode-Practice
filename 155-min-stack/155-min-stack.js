
// var MinStack = function() {
    
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
    
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
    
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

class MinStack {
    constructor() {
        this.array = [];
        this.minArray = [];
        this.length = 0;
        this.min = 0;
    }
    push(value) {
        if (this.length > 0) {
            if (this.min >= value) {
                this.min = value;
                this.minArray.push(value);
            }
        } else {
            this.min = value;
            this.minArray.push(value);
        }
        this.array.push(value);
        this.length += 1;
        return this;
    }
    pop() {
        if (this.length > 0) {
            const temp = this.array[this.array.length-1];
            if (temp === this.minArray[this.minArray.length-1]) {
                this.minArray.pop();
                this.min = this.minArray[this.minArray.length-1];
            }
            this.array.pop();
            this.length -= 1;
            return this;
        } 
    }
    top() {
        return this.array[this.array.length-1];
    }
    getMin() {
        return this.min;
    }
}

// const minStack = new MinStack();