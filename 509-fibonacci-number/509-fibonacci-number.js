/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    return memo[n] = fib(n-1, memo) + fib(n-2, memo);
};