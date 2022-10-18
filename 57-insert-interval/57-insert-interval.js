/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => b[0]-a[0]);
    let result = [];
    while (intervals.length > 1) {
        let current = intervals.pop();
        let next = intervals[intervals.length-1];
        console.log(next)
        if (current[1] >= next[1] && current[0] <= next[0]) {
            next[1] = current[1];
            next[0] = current[0];
            continue;
        }
        else if (next[0] <= current[1]) {
            next[0] = current[0];
            continue;
        } else {
            result.push(current);
        }
    }
    result.push(intervals[0])
    return result;
};


