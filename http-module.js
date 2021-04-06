const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log(req);
    // res.write("Welcome to our home page.")
    // res.end();
    if(req.url === '/'){
        res.end('Welcome to the home page');
    }
    if(req.url === '/about'){
        res.end('Here is the about page');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page ypu are looking for</p>
        <a href='/'> Back Page </a>
    `
    )
})

server.listen(5000);