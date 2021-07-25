// setup jest supertest
const app = require('./index')
const request = require('supertest')

describe('app', () => {
  it('should return hello world', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('hello world', done)
  })

  // test the post /test endpoint - it returns the first element of the city array
  it('should return the first element of the city array', (done) => {
    request(app)
      .post('/test')
      .send({ city: ['London', 'Paris', 'New York'] })
      .expect(200)
      .expect('London', done)
  })
})
