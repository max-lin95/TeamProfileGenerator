const employee = require("../lib/employee");

test("Initiate employee object", () => {
    const employee = new employee();
    expect(typeof(employee)).toBe("object");
});

test("Employee name input", () => {
    const name = "Max"
    const employee = new employee(name);
    expect(employee.name).toBe(name);
});

test("Id input", () => {
    const testId = 100;
    const employee = new employee("Max, testId");
    expect(employee.id).toBe(testId);
});

test ("Email input", () => {
    const testEmail = "max@test.com";
    const employee = new employee("Max", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test("Get the name", () => {
    const testName = "Max";
    const employee = new employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("Get the Id", () => {
    const testId = "100";
    const employee = new employee("Max", testId);
    expect(employee.getId()).toBe(testId);
});

test("Get the email", () => {
    const testEmail = "max@test.com"
    const employee = new employee("Max", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("getRole", () => {
    const testRole = "employee"
    const employee = new employee("Max", 1, "max@test.com");
    expect(employee.getrole()).toBe(testRole);
});
