'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const token = require('./src/backend/api/token');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT;

app.use(logger('dev'));
app.use(express.json());

app.use('/static',express.static(path.resolve(__dirname,'src','frontend','static')));
app.use('/backend',express.static(path.resolve(__dirname,'src','backend')));

app.get('/*', (req,res)=>{
    res.sendFile(path.resolve('src','frontend','index.html'));
});

app.post('/login',(req,res)=>{
   const id = req.body.id;
   const pw = req.body.pw;
   const user = {id:id, pw:pw};
   const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);

   res.json({accessToken:accessToken});
});

app.get('/login',token.authenticationToken,(req,res)=>{
    res.json({"id":req.user.id});
});

app.get('/',token.authenticationToken,(req,res)=>{
    res.json({"현재 유저의 id":req.user.id});
});

app.listen(PORT||8081, ()=>{
    console.log(`Server running on http://localhost:${PORT||8081}`);
});

module.exports=app;