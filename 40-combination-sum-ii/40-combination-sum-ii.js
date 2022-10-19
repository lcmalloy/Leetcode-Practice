/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => b - a);
    let validCombo = new Set();
    let unique = new Set();
    const checkPossibleSolution = (candidates, target, memo, unique, curr = []) => {
        if (target === 0 && !unique.has(`${curr}`)) {
            memo.add([...curr]);
            unique.add(`${[...curr]}`)
            return;
        } else {
            unique.add(`${[...curr]}`)
        }
        while (candidates.length > 0) {
            let value = candidates.pop(),
                remainder = target - value;
            curr.push(value);
            if (remainder >= 0 && !unique.has(`${curr}`)) {
                checkPossibleSolution([...candidates], remainder, memo, unique, curr);
            }
            curr.pop();
        }
        return;
    }
    checkPossibleSolution(candidates, target, validCombo, unique);
    let result = [];
    validCombo.forEach((key) => {
        result.push(key);
    })
    return result;
};