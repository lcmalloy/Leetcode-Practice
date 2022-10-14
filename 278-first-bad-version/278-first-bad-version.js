/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return n;
        }
        let start = 1,
            end = n;
        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (isBadVersion(mid)) {
            //todo: check left
                if(isBadVersion(mid-1)) {
                    end = mid - 1;
                } else {
                    return mid;
                }
            } else {
                start = mid + 1;
            }   
        }   
    };
};