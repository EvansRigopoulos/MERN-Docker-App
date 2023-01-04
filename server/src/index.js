const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/router');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
dotenv.config();
const PORT = 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);

//connect 1st to the mongo db and then accept requests

MongoClient.connect(process.env.MONGO_URI, (err, client) => {
  if (err) throw err;

  const db = client.db('todo-app');
});

app.listen(PORT);
console.log('Server running at port:', PORT);
