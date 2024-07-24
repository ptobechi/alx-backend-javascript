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

describe('Cart page', function() {
  it('should return a status code of 200 for numeric id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response body for numeric id', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return a status code of 404 for non-numeric id', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a correct error message for non-numeric id', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });
});

describe('Available payments endpoint', function() {
  it('should return the correct status code and payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', function() {
  it('should return the correct welcome message', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' },
      headers: { 'Content-Type': 'application/json' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
