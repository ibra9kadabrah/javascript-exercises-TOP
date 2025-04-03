const sumAll = function(n,z) {
    let sum = 0;
    if (!(Number.isInteger(n) && Number.isInteger(z)) || (n < 0 || z < 0)) return "ERROR"; 
    if (n < z) {
        for (; n <= z; n++) sum += n;
    } else {
        for (; n >= z; n--) sum += n;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;