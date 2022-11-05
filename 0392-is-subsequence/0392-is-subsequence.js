/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer1 = 0,
        pointer2 = 0;
    while (pointer2 < t.length) {
        if (s[pointer1] === t[pointer2]) {
            pointer1++
        }
        pointer2++;
    }
    if (pointer1 === s.length) return true;
    
    return false;
};