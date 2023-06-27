const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/api/produtos', function (req, res, next) {
  if (req.body.name && req.body.price && req.body.category) {
    next();
  }
  return res.status(400).json({ message: 'Erro ao validar campos' })
});

app.use('/api/categorias', function (req, res, next) {
  if (req.body.name) {
    next();
  }
  return res.status(400).json({ message: 'Erro ao validar campos' })
});

app.use('/api', routes);

app.listen(3333);