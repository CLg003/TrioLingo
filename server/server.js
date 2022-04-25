const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createWordsRouter = require('./helpers/create_words_router.js');
const createUsersRouter = require('./helpers/create_users_router.js');

MongoClient.connect('mongodb://0.0.0.0:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('triolingo');
    const wordsCollection = db.collection('words');
    const wordsRouter = createWordsRouter(wordsCollection);
    app.use('/api/words', wordsRouter);
    const usersCollection = db.collection('users');
    const usersRouter = createUsersRouter(usersCollection);
    app.use('/api/users', usersRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});