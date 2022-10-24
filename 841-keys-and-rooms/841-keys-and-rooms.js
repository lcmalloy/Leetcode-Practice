/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    visited.add(0);
    let stack = [0];
    while (stack.length > 0) {
        let curr = stack.pop();
        rooms[curr].forEach((val) => {
            if (!visited.has(val)) {
                visited.add(val);
                stack.push(val);   
            }
        })
    }
    if (visited.size === rooms.length) {
        return true;
    }
    return false;
};