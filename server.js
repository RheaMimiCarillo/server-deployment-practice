'use strict';

const express = require('express');

const app = express(); // this is our app singleton

module.exports = app;

// endpoint for testHello.js stuff
app.get('/hello', (req, res) =>
{
  this.response.json(
  {
    name: 'RHEA',
  });
});

app.
