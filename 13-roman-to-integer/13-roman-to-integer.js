/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let rNumeral = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
        IV : 4,
        IX : 9,
        XL : 40,
        XC : 90,
        CD : 400,
        CM : 900
    }
    
    let i = 0;
    
    while (i < s.length) {
            let doubleSymbol = s.substring(i, i + 2);
            if (rNumeral[doubleSymbol]) {
                result += rNumeral[doubleSymbol];
                i += 2;
                continue;
            }
            let singleSymbol = s.substring(i, i + 1);
            result += rNumeral[singleSymbol];
            i += 1;
        }
    return result;
};