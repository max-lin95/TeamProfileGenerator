const engineer = require("../lib/engineer");

test("GitHub constructor", () => {
    const testValue = "maxlin-95";
    const employee = new engineer("Max", 1, "max@test.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "engineer";
    const employee = new engineer("Max", 1, "max@test.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get the Github account", () => {
    const testValue = "maxlin-95";
    const employee = new engineer("Max", 1, "max@test.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
});