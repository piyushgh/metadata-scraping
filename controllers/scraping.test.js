process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = "http://localhost:3000";

describe('POST /scraping/scrapPost', () => {
    it('should respond with a success message', (done) => {
      chai.request(server)
      .post('/scraping/scrapPost')
      .send({
        url: 'http://bit.ly/2QDhxRY'
      })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.status.should.eql('success');
        done();
      });
    });
  });
