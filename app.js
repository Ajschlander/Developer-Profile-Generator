const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require("./generateHTML.js");


getGitHubInfo = async (username) => {
    let res = await axios.get("https://api.github.com/users/" + username);
    const data = res.data;
    console.log(data.name);
    console.log(data.html_url);
    console.log(data.avatar_url);
    console.log(data.bio);
    console.log(data.location);
    console.log(data.followers);
    console.log(data.following);
    console.log(data.public_repos);
}

function getUserInput(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter a GitHub username:",
            name: "username"
        },
        {
            type: "input",
            message: "Enter a color:",
            name: "color"
        }
    ])
    .then(answers => {
        const username = answers.username;
        const colorPicked = answers.color;
        getGitHubInfo(username);
    });
}

getUserInput();