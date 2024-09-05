function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
	let rev = "";
	for (let i = str.length - 1; i >= 0; i--) rev += str[i];
	return rev;
}

module.exports = { capitalize, reverseString };
