/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let digit = digits.split('').reverse();
    if (digit.length === 1) {
        return dial[digit];
    }
    if (digit.length === 0) {
        return [];
    }
    let stack = [];
    digit.forEach((char) => {
        stack.push(dial[char])
    })
    const possible = allCombo(stack, digit);
    return Object.keys(possible);
    
};

const dial = {
    '2' : ['a','b','c'],
    '3' : ['d','e','f'],
    '4' : ['g','h','i'],
    '5' : ['j','k','l'],
    '6' : ['m','n','o'],
    '7' : ['p','q','r','s'],
    '8' : ['t','u','v'],
    '9' : ['w','x','y','z']
}

const allCombo = (stack, arr, memo = {}, curr = []) => {
    if (memo[curr]) {
        return;
    }
    if (curr.length === arr.length) {
        return memo[curr.join('')] = true;
    }
    
    if (stack.length > 0) {
        let current = stack.pop()
        for (let i = 0; i < current.length; i++) {
            curr.push(current[i]);
            allCombo([...stack], arr, memo, curr);
            curr.pop();
        }
    }
    return memo;
}