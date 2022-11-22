const request = require('supertest');
const app = require('./routes/user');
const mongoose = require('mongoose');
const { connect } = require('superagent');
const { config } = require('dotenv');
const User = require('./routes/User');

describe('Test the root path', () => {
  test('It should response the Post method', () => {
    const response = request(app).post('http://localhost:8000/User/add').send({
      Name: 'Kisaa',
      Email: 'kisaa',
      Age: 12,
      Contact: 123,
    });
  });
  expect(response.StatusCode).toBe(200);
});

describe('Test the delete user based on Id', () => {
  test('It should response the Delete method', () => {
    const response = request(app)
      .delete('http://localhost:8000/user/:id')
      .send({});
    expect(response.statusCode).toBe(200);
  })
});

describe('Test the user added', () => {
  test('It should response the UserAdded method', () => {
    const response = request(app)
      .get('http://localhost:8000/user/:id')
      .send({});
    expect(response.body.toEqual('Kisaa').statusCode).toBe(200);
  })
});
