const {readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.readFileSync  //The above and this xis the same xthis with different process.

const first = readFileSync('./content/first.txt', 'utf-8');
const sec = readFileSync('./content/second.txt','utf-8');

console.log(first, sec);

// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${sec}`); //This will erase the contents if already there and write the new text
writeFileSync('./content/result-sync.txt', 
        `Here is the result: ${first}, ${sec}`,
        {flag : 'a'});

// What happens with sync is that it read line by line so in thsi case when the write operation will be over then 
// only it will go to the next line of code . So it is very time consuming and can lead to problem whem deal in real
// life situations.