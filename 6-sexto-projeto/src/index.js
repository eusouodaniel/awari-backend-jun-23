const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
  const produtos = [{
    nome: 'Sapato',
    preco: 100.00,
    tamanho: 40,
    cor: 'marrom'
  },{
    nome: 'Tênis',
    preco: 200.00,
    tamanho: 42,
    cor: 'preto'
  },{
    nome: 'Chinelo',
    preco: 40.00,
    tamanho: 38,
    cor: 'cinza'
  }];
  return res.json(produtos);
});

app.listen(3000);