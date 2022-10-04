/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    newArray = nums1.slice(0).concat(nums2.slice(0));
    let sortedArray = mergeSort(newArray);
    let mid = sortedArray.length / 2;
    if (mid % 1 === .5) {
        return sortedArray[mid - .5];
    } else {
        return (sortedArray[mid] + sortedArray[mid - 1]) / 2;   
    }
};


function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    function merge(left, right) {
        let result = [];
        let lLen = left.length;
        let rLen = right.length; 
        let lIndex = 0;
        let rIndex = 0;
        while (lIndex < lLen && rIndex < rLen) {
            if (left[lIndex] < right[rIndex]) {
                result.push(left[lIndex++]);
            } else {
                result.push(right[rIndex++]);
            }
        }
        return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
    }
    return merge(mergeSort(left), mergeSort(right));
}