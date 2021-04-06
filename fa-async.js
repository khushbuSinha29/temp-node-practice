const { readFile , writeFile } = require('fs');

console.log('Starting with the task');
readFile('./content/first.txt','utf-8', (err, result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err)
    {
        console.log(err);
        return;
    }
    // console.log(result);
    const second = result;
    writeFile('./content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        console.log('Done with the task');
    }
    )
    })
})
console.log('Stating with another task');

// What happens here is that it does not run the code line by line. Once the user 1 run the functionality 
// Then it work is uphold and another user work is started thsi way it serves different user and do not hold onto 
// a single user.
