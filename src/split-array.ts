/**
 * Split a source array into N equally sized sub arrays
 *
 * Source array length is >=  0
 *
 * Subarray length is > 0
 *
 * Throws exception is subarray length is <= 0
 *
 * Returns an array of sub arrays
 */

export function splitArray(sourceArray: any[], numSubArrays: number) {
  if (isParamsInvalid(numSubArrays)) {
    throw new Error('Number of sub arrays must be greater than zero');
  }

  const subArrayMaxLength = Math.ceil(sourceArray.length / numSubArrays);

  const targetArray = [];

  for (var i = 0; i < numSubArrays; i++) {
    targetArray.push(sourceArray.slice(i * subArrayMaxLength, (i + 1) * subArrayMaxLength));
  }

  return targetArray;
}

/**
 * Test parameters for splitArray
 * @param numSubArrays
 * @returns
 */
const isParamsInvalid = (numSubArrays: number) => {
  const inValidSize = numSubArrays! <= 0;
  return inValidSize;
};
