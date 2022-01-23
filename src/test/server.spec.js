const app = require('../../server');
const request = require('supertest');
const should = require('should');

describe('GET /calendar는', () => {
    describe('성공 시',()=>{
        it('일정들을 가져온다.',(done)=>{
            request(app)
            .get('/calendar')
            .end((err,res)=>{
                console.log(res);
                done();
            });
        });
    });

    describe('실패 시',()=>{
        
    });
});