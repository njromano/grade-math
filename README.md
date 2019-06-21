# grade-math
An npm package with some helpful math functions for calculating grade statistics.

## Usage
`import { standardDeviation, normalY, mean, zScore, generatePoints } from 'grade-math'`

## Functions
`data` in this context means an array of numbers.

### Standard Deviation
`standardDeviation(data)`

Calculates the [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of an array of numbers.

### Normal Y
`normalY(x, mean, stdDev)`

Calculates a [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) 
given a data point, mean, and standard deviation.

### Mean
`mean(data)`

Calculates the mean of an array of numbers.

### Z-Score
`zScore(value, mean, stdDev)`

Calulcates the [standard score](https://en.wikipedia.org/wiki/Standard_score) of a value given a mean and standard deviation.

### Generate Points
`generatePoints(stdDev, mean)`

Returns an array of points which follow a bell curve using the standard deviation and mean.
