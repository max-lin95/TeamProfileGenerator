const { createPromptModule } = require("inquirer");
const employee = require("./employee")

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.title = "engineer";
    }

    getGithub() {
        return this.github;
    }
}

createPromptModule.exports = engineer;
