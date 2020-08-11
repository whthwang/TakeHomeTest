const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

//Middlewares
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

//serves static html
app.use(express.static(path.join(__dirname, '../client/public')));



app.listen(port, () => console.log(`server is listening at port ${port}!`));

//Routes
app.get('/api', (req, res) => {

});

app.post('/api', (req, res) => {

});

app.update('/api/:id', (req, res) => {

});
