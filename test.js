const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./src/index.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('App', () => {
  describe('gets all articles', () => {
    before(() => seed.populate());
    it('responds with status 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          console.log(res.message);
          done();
        });
    });
  });
});