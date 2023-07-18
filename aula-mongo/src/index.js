const express = require('express');
require('dotenv').config();
const { ObjectId } = require('mongodb'); 
const mongo = require('./db/mongo');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const db = await mongo();
  const usuario = await db.collection('usuarios')
    .find()
    .toArray();
  return res.status(200).json(usuario);
});

app.patch('/:id', async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const db = await mongo();
  const usuario = await db.collection('usuarios')
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { anoDeNascimento: body.anoDeNascimento },
        $unset: { sobrenome: "" }
      }
    );
  return res.status(200).json(usuario);
});

app.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const db = await mongo();
  const usuario = await db.collection('usuarios')
    .deleteOne({ id: new ObjectId(id) });
  return res.status(204).json(usuario);
});

app.post('/', async (req, res) => {
  const body = req.body;
  const db = await mongo();
  const usuario = await db.collection('usuarios')
    .insertOne({
      nome: body.nome,
      sobrenome: body.sobrenome,
      anoDeNascimento: body.anoDeNascimento
    });
  return res.status(201).json(usuario);
});

app.listen(3333);