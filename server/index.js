require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('', router);

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`Listening at http://localhost:${port}`);