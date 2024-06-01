"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
chalk_1.default.blueBright;
let answers = await inquirer_1.default.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words",
    }]);
const words = answers.sentence.trim().split("");
console.log(words);
console.log(`your sentence word count in ${words.length}`);
