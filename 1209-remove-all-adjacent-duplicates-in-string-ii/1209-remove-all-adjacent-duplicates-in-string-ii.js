/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    if (s.length < k) {
        return s;
    }
    let left = 0, right = 1; 
    let sArr = s.split('');
    
    while(right < sArr.length) {
        //first check
        if (!(sArr[left] === sArr[right])) {
            console.log(sArr[left], sArr[right], left, right)
            left = right;
            right += 1;  
        } else if (right - left + 1 === k) {
            sArr.splice(left, k);
            left = left - k;
            if (left < 0) {
                left = 0;
        }
            right = left;
            } else {
            right += 1;   
        }
    }
    return sArr.join('');
};


/*

left = 1
right = 2
deeedbbcccbdaa
 check d e not dups
    left + 1
    right + 1
    check e e dups
    right + 1
        check if e e are dups yes
            check if 3 - 1 + 1 = k (3) yes
                arr.splice(left, k)
                left = left - k
                right = left
        check if dups no
            left = right;
            




*/