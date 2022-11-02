
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (val <= this.min) {
        this.min = val;
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    if (popped === this.min) {
        let minPop = this.minStack.pop();
        if (this.minStack.length > 0) {
            this.min = this.minStack[this.minStack.length - 1];    
        } else {
            this.min = Infinity;
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */