const express = require('express');
const connection = require('./db/connection');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const [result] = await connection.execute("select * from produtos;")
    return res.json(result);
  } catch (error) {
    console.error(error);
  }
})

app.post('/', async (req, res) => {
  try {
    if (req.body.nome.length >= 60) {
      return res.status(400).json({ error: 'Field is too long' });
    }
    const result = await connection.execute(`
      insert into produtos (nome,preco,descricao,categoria,imagem_url) values
      ('${req.body.nome}', ${req.body.preco}, '${req.body.descricao}', '${req.body.categoria}', '${req.body.imagem_url}}')
    `)
    return res.json(result);
  } catch (error) {
    console.error(error);
  }
})

app.listen(3002);