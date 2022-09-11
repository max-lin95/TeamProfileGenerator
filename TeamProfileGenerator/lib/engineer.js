const { createPromptModule } = require("inquirer");
const employee = require("./employee")

class engineer extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "engineer";
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

createPromptModule.exports = engineer;
