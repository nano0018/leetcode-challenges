function findSumIndexes(numbers, k) {
	const indexes = [];

	for (let index = 0; index < numbers.length; index++) {
		const complement = k - numbers[index];

		for (let subIndex = index + 1; subIndex < numbers.length; subIndex++) {
			if (numbers[subIndex] === complement) {
				indexes.push(index, subIndex);
				return indexes;
			}
		}
	}

	return indexes;
}

function filterWords(words, letters) {
    return words.filter(word => {
      for (let i = 0; i < letters.length; i++) {
        if (word.indexOf(letters[i]) === -1) {
          return false;
        }
      }
      return true;
    });
  }

let numbers = [1, 5, 8, 1, 2];
let k = 13;
let a = findSumIndexes(numbers, k);
console.log(a);
