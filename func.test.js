const funcs = require("./func.js");

test("func object exists", () => expect(funcs).not.toBeNull());

describe("Capitalization", () => {
	test("normal", () => expect(funcs.capitalize("hi")).toEqual("Hi"));
	test("all caps", () => expect(funcs.capitalize("HI")).toEqual("HI"));
	test("with numbers and symbols", () =>
		expect(funcs.capitalize("yo!1!")).toEqual("Yo!1!"));
	test("only symbols", () => expect(funcs.capitalize("!!!")).toEqual("!!!"));
});
