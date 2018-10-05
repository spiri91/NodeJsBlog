const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./src/index.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('App', () => {
  describe('/set?somekey=somevalue', () => {
    it('responds with status 200', (done) => {
      chai.request(app)
        .post('/set?somekey=somevalue')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});