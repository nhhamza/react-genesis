const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const drinks = require('./__mocks__/drinks.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
});

app.get('/api/drinks', (req, res) => {
  setTimeout(() => res.status(200).send(JSON.stringify(drinks)), 1000);
});

app.get('/api/drinks/:id', (req, res) => {
  const { id } = req.params;

  const findElementsById = id => drinks.filter(element => element.id == id);

  const result = findElementsById(id);
  setTimeout(() => res.status(200).send(JSON.stringify(result)), 1000);
});
