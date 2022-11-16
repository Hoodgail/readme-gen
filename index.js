"use strict";

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeToFile = function (fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(data);
        if (err) return console.error(err);
        console.log("README.md file was successfully created!");
    });
};

const getData = function () {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of this project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? ",
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use this application? ",
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project? ",
        },
        {
            type: "list",
            name: "licensing",
            message: "What licenses were used for this project?",
            choices: ["None", "Mozilla", "BDS", "Apache", "MIT"],
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test this project? ",
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address... ",
        },
    ]);
};

async function init() {
    getData().then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
        return data;
    });
}

init();
