const reverseString = function(phrase) {
    const myArray = phrase.split ('');
    const arrayReverse = myArray.reverse();
    let reversePhrase = arrayReverse.join('');
    return reversePhrase
};

// Do not edit below this line
module.exports = reverseString;
