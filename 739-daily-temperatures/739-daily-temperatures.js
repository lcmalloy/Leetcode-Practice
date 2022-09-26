/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let result = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        stack.push(temperatures[i]);
    }
    
    while(stack.length > 0) {
        let temp = stack.shift();
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] > temp) {
                result.push(i + 1);
                break;
            }
            if (stack[i + 1] === undefined) {
                result.push(0);
            }
        }
    }
    if (stack.length === 0) {
            result.push(0);
        }
    return result;
};