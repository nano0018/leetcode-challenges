/* Given an array nums of integers, return how many of them contain an even number of digits.

 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

 

Constraints:

    1 <= nums.length <= 500
    1 <= nums[i] <= 105

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
	let countEven = 0;
	let countDigits = (number) => {
		let digits = 0;
		while (true) {
			let validation = number / 10 ** digits;
			if (validation >= 1) {
				digits++;
			} else {
				break;
			}
		}
		return digits;
	};

	for (let index = 0; index < nums.length; index++) {
		const number = nums[index];
		const numberDigits = countDigits(number);
		if (!(numberDigits % 2)) {
			countEven++;
		}
	}
	return countEven;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
