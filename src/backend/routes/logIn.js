'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const db = require('../db.js');

const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    const { id, pw } = req.body;

    db.query(`
        SELECT * FROM USERS
        WHERE id = ${db.escape(id)}
    `,
        (dbErr, dbRes) => {
            if (dbErr) {
                // 데이터 베이스에서 유저정보를 불러오는데 오류가 있다면
                throw dbErr;
                return res.status(500).send({
                    message: dbErr
                });
            }

            if (!dbRes.length) {
                // 조회된 데이터가 없다면
                return res.status(400).send({
                    message: "존재하지 않는 유저입니다."
                });
            }
            else {
                bcrypt.compare(pw, dbRes[0]['pw'],
                    (bErr, bRes) => {
                        if (bErr) {
                            throw bErr;
                            return res.status(403).send({
                                message: bErr;
                            });
                        }
                        if (bRes) {
                            // 비밀번호가 일치할 때
                            const currentUser = {

                            };

                            const accessToken = jwt.sign(currentUser, process.env.ACCESS_TOKEN_SECRET);

                            res.cookie(process.env.COOKIE_NAME, accessToken);

                            return res.status(200).send({
                                message: "로그인에 성공하였습니다!"
                            });
                        }
                        else {
                            return res.status(403).send({
                                message: "아이디나 비밀번호가 올바르지 않습니다."
                            });
                        }
                    });
            }
        });
});

module.exports = router;