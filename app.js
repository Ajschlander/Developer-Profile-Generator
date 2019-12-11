const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require("./generateHTML.js");


getGitHubInfo = async (username, colorPicked) => {
    let res = await axios.get("https://api.github.com/users/" + username);
    const data = res.data;
    await fs.writeFile("index.html", generateHTML.generateHTML(data, colorPicked), function(err){
        if(err){
            return console.log(err);
        }
        else{
            console.log("done");
        }
    });
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
        getGitHubInfo(username, colorPicked);
    });
}

getUserInput();