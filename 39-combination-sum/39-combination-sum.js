/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const allCombinations = function(list, target, idx = 0, arr = []) {
    if (target === 0) {
        result.push(arr);
        return;
    }
    if (target < 0) {
        //not possible solution
        return;
    }
    for (let i = idx; i < list.length; i++) {
        let remainder = target - list[i];
        allCombinations(list, remainder, i, [...arr, list[i]])
        }
    }
    allCombinations(candidates, target);
    return result;
    
};