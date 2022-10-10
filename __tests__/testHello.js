'use strict';

// supertest is like 'axios' and 'thunderclient', but for running tests
const supertest = require('supertest');

// import server and supertest
const app = require('../server.js');

const request = supertest(app); // provide express 'app' singleton

describe('Testing our HTTP Server', () =>
{
  test('Should return an object with a name property, on GET to /hello endpoint', async () =>
  {
    let response = await request.get('/hello');
    // expecting a response to have data attached to it, because of GET

    // test expects a '200' status code
    expect(response.status).toEqual(200);
    // test expects name property on `body` to be 'RHEA'
    expect(response.body.name).toEqual('RHEA');
  });
});
