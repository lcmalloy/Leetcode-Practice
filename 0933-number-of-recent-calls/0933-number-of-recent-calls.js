
var RecentCounter = function() {
    this.recent = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.recent.push(t);
    if (this.recent.length === 1) {
        return 1;
    }
    let counter = 0;
    let range = [t - 3000, t];
    this.recent.forEach((val) => {
        if (val >= range[0] && val <= range[1]) {
            counter += 1;
        }
    })
    return counter;
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */