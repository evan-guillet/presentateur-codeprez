import prompt from "./prompt.js"

async function greet(){
    const name = await prompt("Saisissez un nom");
    console.log(`Hello, ${name}!`);
}
greet();

