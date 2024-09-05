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

	test("multiple input addition", () =>
		expect(funcs.calculator.add(1, 2, 3)).toEqual(6));
	test("multiple input substraction", () =>
		expect(funcs.calculator.sub(10, 2, 8)).toEqual(0));
	test("multiple input multiplication", () =>
		expect(funcs.calculator.mul(10, 2, 5)).toEqual(100));
	test("multiple input division", () =>
		expect(funcs.calculator.div(10, 2, 5)).toEqual(1));
});
