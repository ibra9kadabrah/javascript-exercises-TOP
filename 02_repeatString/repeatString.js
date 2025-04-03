const repeatString = function(word, repeats) {
    let word_repeated = '';

    if (repeats < 0) return 'ERROR';
    
    for (let i = 0; i < repeats; i++) {
        word_repeated += word;
    }
    return word_repeated;
};

// Do not edit below this line
module.exports = repeatString;
