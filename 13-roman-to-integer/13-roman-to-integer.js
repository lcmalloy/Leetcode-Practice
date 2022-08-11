/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    
    for (let i  = 0; i < s.length; i++) {
        if (s[i] === 'C') {
            if (s[i+1] === 'D') {
                result += 400;
                i += 1;
                continue;
            } else if (s[i+1] === 'M') {
                result += 900;
                i += 1;
                continue;
            } else {
                result += 100;
                continue;
            }
        }
        if (s[i] === 'X') {
            if (s[i+1] === 'L') {
                result += 40;
                i += 1;
                continue;
            } else if (s[i+1] === 'C') {
                result += 90;
                i += 1;
                continue;
            } else {
                result += 10;
                continue;
            }
        }
        if (s[i] === 'I') {
            if (s[i+1] === 'V') {
                result += 4;
                i += 1;
                continue;
            } else if (s[i+1] === 'X') {
                result += 9;
                i += 1;
                continue;
            } else if (s[i+1] === 'I') {
                if (s[i+2] === 'I') {
                    result += 3;
                    i += 2;
                    continue;
                } else {
                    result += 2;
                    i += 1;
                    continue;
                }
            } else {
                result += 1;
                continue;
            }
        }
        if (s[i] === 'D') {
            result += 500;
        }
        if (s[i] === 'M') {
            result += 1000;
        }
        if (s[i] === 'L') {
            result += 50;
        }
        if (s[i] === 'C') {
            result += 100;
        }
        if (s[i] === 'V') {
            result += 5;
        }
        if (s[i] === 'X') {
            result += 10;
        }

    }
    
    return result;
};