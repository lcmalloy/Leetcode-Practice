/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    let collection = new Set();
    nums.sort((a, b) => b - a);
    while(nums.length > 0) {
        let current = nums.pop();
        let initial = [current];
        collection.add(initial);
        possibleSolution(initial, nums, collection);   
    }
    console.log(collection);
    for (let key of collection.entries()) {
        result.push(key[0]);
    }
    return result;
};

const possibleSolution = (subset, nums, collection) => {
    if (nums.length === 0) {
        return;
    }
    let traverse = [...nums];
    while (traverse.length > 0) {
        let current = traverse.pop(),
            newSubset = [...subset];
        newSubset.push(current);
        collection.add(newSubset);
        possibleSolution(newSubset, traverse, collection);
            
    }
}

