'use strict';

const express = require('express');
const router = express.Router();

const db = require('../db.js');

router.post('/', (req, res) => {
    const { id, pw } = req.body;

    db.query(`
        SELECT * FROM USERS
        WHERE id = ${db.escape(id)}
    `,
    (dbErr, dbRes)=>{
        if(dbErr){
            // 데이터 베이스에서 유저정보를 불러오는데 오류가 있다면
            throw dbErr;
            return res.status(500).send({
                message: dbErr
            });
        }

        if(!dbRes.length){
            // 조회된 데이터가 없다면
            return res.status(400).send({
                message: "존재하지 않는 유저입니다."
            });
        }
        else{
            
        }
    });
});

module.exports = router;