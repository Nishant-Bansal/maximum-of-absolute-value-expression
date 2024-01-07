/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let a1 = [], a2 = [], a3 = [], a4 = [], resultArr = [];

    for(let i = 0; i < arr1.length; i++){
        a1.push(arr1[i]+arr2[i]+i)
        a2.push(-arr1[i]+arr2[i]+i)
        a3.push(arr1[i]-arr2[i]+i)
        a4.push(-arr1[i]-arr2[i]+i)
    }

    resultArr.push(Math.max(...a1)-Math.min(...a1))
    resultArr.push(Math.max(...a2)-Math.min(...a2))
    resultArr.push(Math.max(...a3)-Math.min(...a3))
    resultArr.push(Math.max(...a4)-Math.min(...a4))

    return Math.max(...resultArr)

};

console.log("maxAbsValExpr ==> ", maxAbsValExpr([1,-2], [8, 8]))
