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
