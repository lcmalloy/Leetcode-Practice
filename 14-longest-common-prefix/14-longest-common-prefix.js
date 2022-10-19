/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 1) {
        return strs[0];
    }
    
    if (strs.includes("")) {
        return "";
    }
    
    let right = 0;
    
    while (right < strs[0].length) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[0][right] !== strs[i][right]) {
                return strs[0].slice(0, right);
            }
        }
        right += 1;
    }
    return strs[0];
};