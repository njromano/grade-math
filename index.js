export function standardDeviation(values) {
    let avg = mean(values);

    let squareDiffs = values.map(function (value) {
        let diff = value - avg;
        let sqrDiff = diff * diff;
        return sqrDiff;
    });

    let avgSquareDiff = mean(squareDiffs);
        
    let stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
};

export function normalY(x, mean, stdDev) {
    return Math.exp((-0.5) * Math.pow((x - mean) / stdDev, 2));
}

export function mean(data) {
    let sum = data.reduce(function (sum, value) {
        return sum + value;
    }, 0);

    let mean = sum / data.length;
    return mean;
};

export function zScore(value, avg, stdDev) {
    return (value - avg) / stdDev;
};

import range from 'lodash.range';

export function generatePoints(stdDev, mean) {
    let min = Math.floor(mean - 4 * stdDev);
    let max = Math.ceil(mean + 4 * stdDev);
    let unit = (max - min) / 100;
    return range(min, max, unit);
}