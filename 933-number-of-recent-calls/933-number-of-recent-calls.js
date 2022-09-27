
var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let range = [t - 3000, t];
    let callVolume = 0;
    this.queue.push(t);
    if (this.queue.length > 0) {
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i] >= range[0] && this.queue[i] <= range[1]) {
                callVolume += 1;
            }    
        } 
    }
    return callVolume;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */