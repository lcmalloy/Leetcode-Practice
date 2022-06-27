/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; 
    let string = s.split('');
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '{' || string[i] === '(' || string[i] === '['){
            stack.push(string[i]);                                     
        } else if (string[i] === '}') {
            if (stack[stack.length - 1] === '{' ) {
                stack.pop();                  
            } else {
                return false;
            }
        } else if (string[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        } else if (string[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};