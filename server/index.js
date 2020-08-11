const express = require('express');
const parser = require('body-parser');
const path = require('path');

const db = require('../database/model');

const app = express();
const port = 3000;

//Middlewares
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//serves static html
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => console.log(`server is listening at port ${port}!`));


//Routes - retrieve all posts from the database
app.get('/posts', (req, res) => {
  console.log('hi from get all')
  db.Posts.find({})
    .then((data) => {
      res.status(200).send((data));
    }).catch((error) => {
      res.status(404).send(error);
    })
});
