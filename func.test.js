const funcs = require("./func.js");

test("func object exists", () => expect(funcs).not.toBeNull());

describe("Capitalization", () => {
	test("letters only", () => expect(funcs.capitalize("hi")).toEqual("Hi"));
	test("letters all caps", () => expect(funcs.capitalize("HI")).toEqual("HI"));
	test("with numbers and symbols", () =>
		expect(funcs.capitalize("yo!1!")).toEqual("Yo!1!"));
	test("only symbols", () => expect(funcs.capitalize("!!!")).toEqual("!!!"));
	test("non string input throws an error", () =>
		expect(() => funcs.capitalize(0)).toThrow());
});

describe("String Reversion", () => {
	test("letters only", () =>
		expect(funcs.reverseString("wadup")).toEqual("pudaw"));
	test("letters and symbols", () =>
		expect(funcs.reverseString("wadup!!1")).toEqual("1!!pudaw"));
	test("non string input throws an error", () =>
		expect(() => funcs.reverseString(0)).toThrow());
});

describe("Calculator", () => {
	test("addition", () => expect(funcs.calculator.add(1, 2)).toEqual(3));
	test("subtraction", () => expect(funcs.calculator.sub(5, 1)).toEqual(4));
	test("multiplication", () => expect(funcs.calculator.mul(2, 4)).toEqual(8));
	test("division", () => expect(funcs.calculator.div(10, 2)).toEqual(5));
	test("division by zero error", () =>
		expect(() => funcs.calculator.div(10, 0)).toThrow());

	test("multiple input addition", () =>
		expect(funcs.calculator.add(1, 2, 3)).toEqual(6));
	test("multiple input subtraction", () =>
		expect(funcs.calculator.sub(10, 2, 8)).toEqual(0));
	test("multiple input multiplication", () =>
		expect(funcs.calculator.mul(10, 2, 5)).toEqual(100));
	test("multiple input division", () =>
		expect(funcs.calculator.div(10, 2, 5)).toEqual(1));

	test("mixed 1", () =>
		expect(funcs.calculator.add(funcs.calculator.mul(2, 5), 5)).toEqual(15));
	test("mixed 2", () =>
		expect(
			funcs.calculator.div(
				funcs.calculator.add(funcs.calculator.mul(2, 5), 5),
				funcs.calculator.sub(10, 5)
			)
		).toEqual(3));
});

describe("Caesar's Cipher", () => {
	test("Shift by three", () =>
		expect(funcs.caesarCipher("xyz", 3)).toBe("abc"));
	test("Shift by three with capitals", () =>
		expect(funcs.caesarCipher("HeLLo", 3)).toBe("KhOOr"));
	test("Shift by three with punctuation", () =>
		expect(funcs.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));
});
