const express = require('express');
const parser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');

const db = require('../database/model');

const server = express();
const port = 3000;

//Middlewares
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));

//serves static html
server.use(express.static(path.join(__dirname, '../client/public')));

server.listen(port, () => console.log(`server is listening at port ${port}!`));

server.get('/posts', (req, res) => {
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
})

module.exports = server; //for testing