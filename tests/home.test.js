const app = require('../app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Home Page', () => {

    it('should be a html page', (done) => {
        request(app.callback())
            .get('/')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                expect(res.type).to.equal('text/html');
                done();
            });
    });

});
