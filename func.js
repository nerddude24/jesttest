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
	add: (a, b) => a + b,
	sub: (a, b) => a - b,
	mul: (a, b) => a * b,
	div: (a, b) => a / b,
};

module.exports = { capitalize, reverseString, calculator };
