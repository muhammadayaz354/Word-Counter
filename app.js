#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my Word Counter \n");
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word: ",
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your Total Words in Your Sentence is ${words.length}`);
console.log("\n Thanks For Using My Word Counter");
