const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cards = require('./routes/cards');
const users = require('./routes/users');

const {
  PORT = 3000,
} = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cards);
app.use('/users', users);

app.get('*', (req, res) => {
  res.status(404);
  res.send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
