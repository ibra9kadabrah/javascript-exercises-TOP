"use strict"

const removeFromArray = function(arr, ...arr_remove) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr_remove.length; j++) {
            if (arr[i] === arr_remove[j]) {
                arr= arr.toSpliced(i, 1);
                i = 0;
            }
        }
    }
    return arr
};

removeFromArray([1,2,3,4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
