# Twig Coding Challenge

## Introduction

The objective of the Twig Coding Challenge was to divide an array into N equally sized sub arrays.

A suite of unit tests were written to test the basic algorithm and explore any edge cases.

## Install

`npm install`

## Tests

`npm run test`

or

`npx mocha --require esm`

## Example Usage

```javascript
const sourceArray = [1, 2, 3, 4, 5, 6, 7];
const numSubArrays = 3;
targetArray = splitArray(sourceArray, numSubArrays);
// [[1, 2, 3], [4, 5, 6], [7]]
```

- If numSubArrays is zero or less the function will throw an exception.
- If numSubArrays is greater than the length of the array the target array will be padded with empty arrays.

## Algorithm

1. Given a source array and the required number of sub-arrays (numSubArrays) calculate the sub-array maximum length (subArrayMaxLength).
1. Loop over the source array numSubArrays times.
1. For each loop extract subArrayMaxLength items from the source array
1. Add the extracted items to the target array
1. At completion the target array should contain the required number of sub-arrays
1. Each sub-array will contain between subArrayMaxLength and zero items

## Development Environment

The source code was written in [Typescript](https://www.typescriptlang.org/) and the compiled Javascript
was tested using the [Mocha Test Framework](https://mochajs.org/) and the [Chai Assertion Library](https://www.chaijs.com/).

The node module [esm](https://www.npmjs.com/package/esm) was used to allow Node 6+ to load ECMAScript modules.

The code was formatted and linted using [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/)

Peter J Smith 09Mar21
