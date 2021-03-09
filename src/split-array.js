/**
 * Split a source array into N equally sized sub arrays
 * Source array length is >=  0
 * Subarray length is > 0
 * Throws exception is subarray length is <= 0
 * @param sourceArray
 * @param numSubArrays
 * @returns
 */
export function splitArray(sourceArray, numSubArrays) {
    if (isParamsInvalid(numSubArrays)) {
        throw new Error('Number of sub arrays must be greater than zero');
    }
    var subArrayMaxLength = Math.ceil(sourceArray.length / numSubArrays); //?
    var targetArray = [];
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
var isParamsInvalid = function (numSubArrays) {
    var inValidSize = numSubArrays <= 0;
    return inValidSize;
};
