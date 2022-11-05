/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    const generateCombo = (left, right, combo, memo = {}) => {
        if (left === 0 && right === 0) {
            return memo[combo] = 1;
        }
        
        let options = ['(', ')'];
        
        for (let i = 0; i < options.length; i++) {
            if (options[i] === '(' && left > 0) {
                 generateCombo(left-1, right, combo+options[i], memo);
            } else if (options[i] === ')' && right > 0 && left < right) {
                 generateCombo(left, right-1, combo+options[i], memo);
            }
        }
        return memo;
    }
    let test = generateCombo(n-1, n, '(');
    for (let key in test) {
        result.push(key);
    }
    return result;
};