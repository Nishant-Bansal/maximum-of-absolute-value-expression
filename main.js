/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let max1 = Number.MIN_VALUE;
    let max2 = Number.MIN_VALUE;
    let max3 = Number.MIN_VALUE;
    let max4 = Number.MIN_VALUE;
    let min1 = Number.MAX_VALUE;
    let min2 = Number.MAX_VALUE;
    let min3 = Number.MAX_VALUE;
    let min4 = Number.MAX_VALUE;

    let len = arr1.length

    for(let i=0; i < len; i++){
        max1 = Math.max(arr1[i] + arr2[i] + i, max1)
        min1 = Math.min(arr1[i] + arr2[i] + i, min1)

        max2 = Math.max(arr1[i] - arr2[i] + i, max2)
        min2 = Math.min(arr1[i] - arr2[i] + i, min2)

        max3 = Math.max(-arr1[i] + arr2[i] + i, max3)
        min3 = Math.min(-arr1[i] + arr2[i] + i, min3)

        max4 = Math.max(-arr1[i] - arr2[i] + i, max4)
        min4 = Math.min(-arr1[i] - arr2[i] + i, min4) 
    }

    return Math.max(Math.max(max1-min1, max2-min2), Math.max(max3-min3, max4-min4));
};

console.log("maxAbsValExpr ==> ", maxAbsValExpr([1,2,3,4], [-1,4,5,6]))
