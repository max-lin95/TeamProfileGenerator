const manager = require("../lib/manager");

test("Get office number", () => {
    const testValue = "100";
    const employee = new manager("Max", 1, "max@test.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "manager";
    const employee = new manager("Max", 1, "max@test.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});