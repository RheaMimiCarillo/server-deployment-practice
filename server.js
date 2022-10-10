'use strict';

const express = require('express');

const app = express(); // this is our app singleton

app.get('/', (req, res) =>
{
  res.status(200).send('Oh, it\'s you.');
})

// endpoint for testHello.js stuff
app.get('/hello', (req, res) =>
{
  this.res.json(
    {
      name: 'RHEA',
    });
});

// make a response to a query
// return a JSON object with name, and role properties
app.get('/query', (req, res) =>
{
  let name = res.query.name;
  let role = res.query.role;
  res.json({
    name,
    role,
  });
})

module.exports = app;
