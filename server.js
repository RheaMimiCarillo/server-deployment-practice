'use strict';

const express = require('express');

const app = express(); // this is our app singleton

module.exports = app;

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

  res.json(
  {
    name,
    role,
  });
})

// request parameter
app.get('/params/name', (req, res)=>
{
  
});
