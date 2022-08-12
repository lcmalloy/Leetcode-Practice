/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            let isMatch = stack.pop();
            if (s[i] === ')' && isMatch !== '(') {
                return false;
            } else if (s[i] === '}' && isMatch !== '{') {
                return false;
            } else if (s[i] === ']' && isMatch !== '[') {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};