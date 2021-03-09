import { expect } from 'chai';
import { splitArray } from '../src/split-array';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const alphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const mixedArray = [1, 2, 'A', null, -1, [1, 2, 3], null];

describe('My first test suite', () => {
  it('should split source array into 4 sub arrays', () => {
    const targetArray = splitArray(numArray, 3);
    expect(targetArray.length).to.equal(5);
  });
});
