// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:

//     1 <= nums.length <= 105
//     nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let prevNumber = undefined;
	let countConsecutive = 0;
	let maxConsecutive = 0;
	for (let index = 0; index < nums.length; index++) {
		const num = nums[index];

		if (num > 0 && countConsecutive < 1) {
			countConsecutive = 1;
		} 

        if (num === 0) {
            countConsecutive = 0;
        }

		if (prevNumber === num && num > 0) {
			countConsecutive++;
		}

		if (maxConsecutive < countConsecutive) {
			maxConsecutive = countConsecutive;
		}

        prevNumber = num;
	}

	return maxConsecutive;
};

nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));

nums = [1, 1, 0, 1, 1, 1, 1, 0];
console.log(findMaxConsecutiveOnes(nums));

nums = [0, 1];
console.log(findMaxConsecutiveOnes(nums));

nums = [0];
console.log(findMaxConsecutiveOnes(nums));

// var findMaxConsecutiveOnes = function (nums) {
// 	let prevNumber = undefined;
// 	let countConsecutive = 0;
// 	let maxConsecutive = 0;
// 	nums.forEach((number) => {
// 		if (prevNumber === undefined) {
// 			prevNumber = number;
// 		}

// 		if (prevNumber === number) {
// 			countConsecutive++;
// 		} else {
// 			countConsecutive = 1;
// 			prevNumber = number;
// 		}
// 		if (maxConsecutive < countConsecutive) {
// 			maxConsecutive = countConsecutive;
// 		}
// 	});

// 	return maxConsecutive;
// };
