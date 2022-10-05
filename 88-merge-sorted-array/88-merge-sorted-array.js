/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let pointer = m + n - 1;
    
    while (index1 >= 0 && index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[pointer] = nums1[index1];
            pointer -= 1;
            index1 -= 1;
        } else {
            nums1[pointer] = nums2[index2];
            pointer -= 1;
            index2 -= 1;
        }
    }
    
    while (index2 >= 0) {
        nums1[pointer] = nums2[index2]
        index2 -= 1;
        pointer -= 1;
    }
    
   /* if (index1 >= 0) {
        nums1[pointer] = nums1[index1];
        index1 -= 1;
        pointer -= 1;
    } */
    
};



/*

     i1    pointer
[1,2,3,0,0,0] m = 3
     i2
[2,5,6] n = 3


i1 = 2
i2 = 2
pointer = 5

*/