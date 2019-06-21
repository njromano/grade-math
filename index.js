exports.standardDeviation = function (values) {
    let avg = exports.mean(values);

    let squareDiffs = values.map(function (value) {
        let diff = value - avg;
        let sqrDiff = diff * diff;
        return sqrDiff;
    });

    let avgSquareDiff = exports.mean(squareDiffs);
        
    let stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
};

exports.normalY = function (x, mean, stdDev) {
    return Math.exp((-0.5) * Math.pow((x - mean) / stdDev, 2));
}

exports.mean = function (data) {
    let sum = data.reduce(function (sum, value) {
        return sum + value;
    }, 0);

    let mean = sum / data.length;
    return mean;
};

exports.zScore = function (value, avg, stdDev) {
    return (value - avg) / stdDev;
};

var range = require('lodash.range');

exports.generatePoints = function (stdDev, mean) {
    let min = Math.floor(mean - 4 * stdDev);
    let max = Math.ceil(mean + 4 * stdDev);
    let unit = (max - min) / 100;
    return range(min, max, unit);
}