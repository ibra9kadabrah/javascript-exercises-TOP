const removeFromArray = function(arr, arr_remove) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr_remove) {
            new_arr = arr.toSpliced(i, 1);
        }
    }
    return new_arr
};

// Do not edit below this line
module.exports = removeFromArray;
