const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const html = require("./src/htmlTemp");

const WriteFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamStr = ``,

async function main () {
    try {
        await prompt()
        for(let i = 0 i < teamArray.length; i++) {
            teamStr = teamStr + html.generateCard(teamArray[i]);
        }

        let generatedHtml = html.generateHTML(teamStr)

        console.log(teamStr)
        WriteFileAsync("./dist/index.html", generatedHtml)
    } catch (err) {
        return console.log(err);
    }
};

async function prompt() {
    let responseEntered = "";
    do {
        try {
            response = await inquirer.prompt([
              {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
              },
              {
                type: "input",
                name: "ID",
                message: "What is the employee's ID?"
              },
              {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
              },
              {
                type: "list",
                name: "role",
                message: "Is the employee an intern, engineer, or manager?"
              }, 
            ]);
        }
    }
}