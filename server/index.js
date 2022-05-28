const axios = require('axios');
const path = require('path');
const express = require('express');
require('dotenv').config();

const { PORT, TOKEN } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  const { method } = req;
  const url = `http://localhost:3000${req.originalUrl}`;
  const headers = { Authorization: TOKEN };
  const data = req.body;
  axios({
    method, url, headers, data,
  }).then((result) => { res.send(result.data); })
    .catch((err) => res.send(err));
});

app.listen((PORT), () => {
  console.log(`Client listening on port ${PORT}!`);
});
