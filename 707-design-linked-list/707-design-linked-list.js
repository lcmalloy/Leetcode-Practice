function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.size - 1) {
        return -1;
    }
    let current = this.head;
    while (index--) current = current?.next;
    return current?.val ?? -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.size += 1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
     this.tail.next = node;
     this.tail = node;
    }
    this.size += 1;   
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    }
    if (index === this.size) {
        return this.addAtTail(val);
    }
    if (index === 0) {
        return this.addAtHead(val);
    }
    
    let node = new Node(val);
    let current = this.head;
    
    while (--index) current = current?.next;
    node.next = current.next;
    current.next = node;
    this.size += 1;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        while(--index) current = current.next;
        current.next = current.next?.next;
        if (!current.next) this.tail = current;
    }
    this.size -= 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */