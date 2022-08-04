/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let occurance = {};
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i].split('').sort().join('');
        occurance[word] = [...Object.values(occurance[word] || {}), i];
    }
    return Object.values(occurance).map(e => e.map(k => strs[k]))
};