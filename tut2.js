//Reading built in modules 
const fs = require("fs");
let text = fs.readFileSync('test.txt', "utf-8");
console.log("The content of the file is:");
console.log(text);

text = text.replace("backend", "new file");
console.log("Creating a new file");
fs.writeFileSync('New.txt', text);

const newtext = "This is the next text to be added in the newly created file newfile.txt";
fs.writeFileSync('New.txt', newtext);