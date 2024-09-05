function capitalize(str) {
	if (typeof str !== "string") throw new Error("Input is not string!");

	return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
	if (typeof str !== "string") throw new Error("Input is not string!");

	let rev = "";
	for (let i = str.length - 1; i >= 0; i--) rev += str[i];
	return rev;
}

const calculator = {
	add: (...nums) => nums.reduce((prev, cur) => prev + cur, 0),
	sub: (...nums) => nums.slice(1).reduce((prev, cur) => prev - cur, nums[0]),
	mul: (...nums) => nums.reduce((prev, cur) => prev * cur, 1),
	div: (...nums) => {
		if (nums.includes(0)) throw new Error("Can't divide by zero!");
		else return nums.slice(1).reduce((prev, cur) => prev / cur, nums[0]);
	},
};

function isLetter(charCode) {
	const ALPHABET_LENGTH = 26;

	// UTF-16 CODE CONSTANTS
	// MORE INFO: https://www.fileformat.info/info/charset/UTF-16/list.htm
	const CAPITAL_START = 65;
	const CAPITAL_END = CAPITAL_START + ALPHABET_LENGTH - 1;
	const SMALL_START = 97;
	const SMALL_END = SMALL_START + ALPHABET_LENGTH - 1;

	return (
		(charCode >= SMALL_START && charCode <= SMALL_END) ||
		(charCode >= CAPITAL_START && charCode <= CAPITAL_END)
	);
}

function caesarCipher(str, shift) {
	const ALPHABET_LENGTH = 26;

	if (shift >= ALPHABET_LENGTH) throw new Error("Can't shift by more than 25!");

	let cipheredString = "";
	for (let i = 0; i < str.length; i++) {
		let charCode = str.charCodeAt(i);

		if (isLetter(charCode)) {
			charCode += shift;

			// if shifted char code is over Z or z, loop back to A or a
			if (!isLetter(charCode)) charCode -= ALPHABET_LENGTH;
		}

		cipheredString += String.fromCharCode(charCode);
	}

	return cipheredString;
}

function analyzeArray(arr) {
	return {
		average: arr.reduce((prev, cur) => prev + cur / arr.length, 0),
		min: arr.reduce((prev, cur) => Math.min(prev, cur), arr[0]),
		max: arr.reduce((prev, cur) => Math.max(prev, cur), arr[0]),
		length: arr.length,
	};
}

module.exports = {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
};
