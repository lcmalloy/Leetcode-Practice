/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   const word1 = s.split('').sort();
   const word2 = t.split('').sort();
    if (word1.length !== word2.length) {
        return false; 
    }
    for (let i = 0; i < word1.length; i++) {
        if(word1[i] !== word2[i]) {
            return false;
        }
    }
    return true; 
};