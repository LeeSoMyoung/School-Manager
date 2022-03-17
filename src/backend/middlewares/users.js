'use strict';

require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = {
    validateLogIn: (req,res,next)=>{

        next();
    },

    isLoggedIn: (req,res,next)=>{
        const accessToken = req.cookies[process.env.COOKIE_NAME];

        if(!accessToken){
            // accessToken이 존재하지 않을때
            res.redirect(`http://localhost:${process.env.PORT}/login`);
        }
        else{
            try{
                const isValidToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
                
                req.id = isValidToken.id;

                next();
            }
            catch(err){
                throw err;
                return res.status(403).send({
                    message: "유효하지 않은 토큰입니다."
                });
            }
        }
    }
};