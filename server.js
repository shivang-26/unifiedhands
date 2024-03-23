
const express = require('express');
const moongoose = require('moongoose');
const mongoose =require('moongoose');

const app = express();


app.use('/public', express.static('public'));




app.get('/login', (req, res) => {
    res.render("login.ejs")
  });

  app.get('/', (req, res) => {
    res.render("index.ejs")
  });

  app.get('/about', (req, res) => {
    res.render("about.ejs")
  });

  app.get('/ngolist', (req, res) => {
    res.render("ngolist.ejs")
  });

const port = 5501;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
