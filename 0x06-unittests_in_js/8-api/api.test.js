const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const http = require('http');

const server = http.createServer(app);

describe('Index page', function() {
  before((done) => {
    server.listen(7865, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should return a status code of 200', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response body', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

});
