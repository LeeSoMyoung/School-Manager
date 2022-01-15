require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);

const PORT = process.env.PORT;

app.use('/static',express.static(path.resolve(__dirname,'frontend','static')));

app.get('/*', (req,res)=>{
    res.sendFile(path.resolve('frontend','index.html'));
});

app.listen(PORT||8081, ()=>{
    console.log(`Server running on http://localhost:${PORT||8081}`);
});