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
	div: (...nums) => nums.slice(1).reduce((prev, cur) => prev / cur, nums[0]),
};

module.exports = { capitalize, reverseString, calculator };
