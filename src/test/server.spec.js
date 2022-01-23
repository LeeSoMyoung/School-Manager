const app = require('../../server');
const request = require('supertest');

describe('GET /calendar는', () => {
    it('calendar 클릭 후 화면', (done) => {
        request(app)
            .get('/calendar')
            .end((err, res) => {
                console.log(res);
                done();
            });
    });
});