/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    let rNumeral = {
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1
    }
    
    for (let key in rNumeral) {
        if (rNumeral[key] > num)continue;
        while (num >= rNumeral[key]) {
            result = result + key;
            num -= rNumeral[key];   
        }
    } 
    
    return result;
};