/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let collection = {};
    let totalJewels = 0;
    let eachStone = stones.split('');
    let eachJewel = jewels.split('');
    for (let i = 0; i < eachStone.length; i++) {
        if (!collection[eachStone[i]]) {
            collection[eachStone[i]] = 0
        }
        collection[eachStone[i]] += 1;
    }
    for (let i = 0; i < eachJewel.length; i++) {
        if (collection[eachJewel[i]]) {
            totalJewels += collection[eachJewel[i]];
        }
    }
    return totalJewels;
};