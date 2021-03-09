import { expect } from 'chai';
import { splitArray } from '../src/split-array';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const alphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const mixedArray = [1, 2, 'A', null, -1, [1, 2, 3], null];
const smallArray = [1, 2, 3];
const emptyArray = [];
const nestedArray = [
  [1, 2, 3],
  [1, 2, 3, 4],
];

describe('Split Array content tests', () => {
  it('should split numeric source array into 3 sub arrays', () => {
    const targetArray = splitArray(numArray, 3);
    expect(targetArray.length).to.equal(3);
  });

  it('should split alpha source array into 3 sub arrays', () => {
    const targetArray = splitArray(numArray, 3);
    expect(targetArray.length).to.equal(3);
  });

  it('should split mixed source array into 3 sub arrays', () => {
    const targetArray = splitArray(numArray, 3);
    expect(targetArray.length).to.equal(3);
  });
});

describe('Split Array size tests', () => {
  it('should throw exception if number of sub arrays is 0', () => {
    expect(function () {
      splitArray(numArray, 0);
    }).to.throw('Number of sub arrays must be greater than zero');
  });

  it('should throw exception if number of sub arrays is < 0', () => {
    expect(function () {
      splitArray(numArray, -1);
    }).to.throw('Number of sub arrays must be greater than zero');
  });

  it('should create empty arrays if the source array length is less than the number of sub arrays', () => {
    const targetArray = splitArray(smallArray, 5);
    expect(targetArray.length).to.equal(5);
    expect(targetArray[0].length).to.equal(1);
    expect(targetArray[1].length).to.equal(1);
    expect(targetArray[2].length).to.equal(1);
    expect(targetArray[3].length).to.equal(0);
    expect(targetArray[4].length).to.equal(0);
  });
});
