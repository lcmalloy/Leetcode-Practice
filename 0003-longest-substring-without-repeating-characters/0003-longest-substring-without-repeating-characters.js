/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    s.split('');
    let left = 0,
        reoccurance = {},
        maxLength = 1;
    reoccurance[s[left]] = 1;
    for (let right=1; right<s.length; right++) {
        if (!reoccurance[s[right]]) {
            reoccurance[s[right]] = 0;
        }
        reoccurance[s[right]] += 1;
        while(reoccurance[s[right]] > 1) {
            reoccurance[s[left]] -= 1;
            left += 1;
        }
        maxLength = Math.max(maxLength, (right - left) + 1);
    }
    return maxLength;
};