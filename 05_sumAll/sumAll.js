const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (Number.isInteger(min) === false || Number.isInteger(max)=== false) return "ERROR";
    if (max < min) {
        let temp = min;
        min = max;
        max = temp;
    }
    let sumInt = 0;
    for (let i = min; i < max + 1; i++) {
        sumInt += i;
    }
    return sumInt;
};


//
// Do not edit below this line
module.exports = sumAll;
