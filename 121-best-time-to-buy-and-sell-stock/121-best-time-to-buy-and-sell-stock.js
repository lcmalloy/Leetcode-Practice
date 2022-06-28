/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let pointer = 0;
    let profit = 0; 
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            pointer = i;
            i = pointer;
        } else {
            profit = Math.max(profit, [prices[i] - min])
        }
    }
    return profit; 
};