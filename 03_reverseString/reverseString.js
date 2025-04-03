const reverseString = function(word) {
    let length = word.length;
    let reversed_string = '';
    
    for (let i = length - 1; i >= 0; i--) {
        reversed_string += word.at(i);
    }
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
