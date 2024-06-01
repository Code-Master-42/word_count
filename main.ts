
import chalk from "chalk"
import inquirer from "inquirer"
chalk.blueBright
let answers:{sentence:string}= await inquirer.prompt([{
name:"sentence",
type:"input",
message:"Enter your sentence to count the words",
}])
const words=answers.sentence.trim().split("")
console.log(words)
console.log(`your sentence word count in ${words.length}`);