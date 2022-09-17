const intern = require("../lib/intern");

test("School constructor", () => {
    const testValue = "UCI", 
    const employee = new intern("Max", 1, "max@test.com", testValue);
    expect(employee.school).toBe(testValue)''
});

test("getRole function", () => {
    const testValue = "intern";
    const employee = new intern("Max", 1, "max@test.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get the school of the intern", () => {
    const testValue = "UCI";
    const employee = new intern("Max", 1, "max@test.com", testValue)
    expect(employee.getSchool()).toBe(testValue);
});