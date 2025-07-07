const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: File not found');
    }else{
        res.write(data);
    }
    res.end();
    });
    // res.write('Hello, World!');

    // const add = (a, b) => a + b;

    // res.end(`Sum: ${add(5, 10)}`);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/', (req, res) => res.send('Hello from Express'));
// app.post('/data', (req, res) => res.json(req.body));

// app.listen(3000);