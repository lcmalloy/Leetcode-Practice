/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let nSteps = {};
    for (let i = 0; i <= n; i++) {
        if (i < 3) {
            nSteps[i] = i;
        } else {
            nSteps[i] = nSteps[i - 2] + nSteps[i - 1];
        }
    }
    return nSteps[n];
};