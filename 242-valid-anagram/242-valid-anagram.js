/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let word1 = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];
        if (!word1[currentLetter]) {
            word1[currentLetter] = 0;
        }
        word1[currentLetter] += 1;
    }
    for (let letter of t) {
        if (word1[letter] === 0 || word1[letter] === undefined) {
            return false;
        }
        word1[letter] -= 1;
    }
    return true;
};