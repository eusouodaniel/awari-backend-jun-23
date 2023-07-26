const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('./middlewares/auth');

require('dotenv').config();
const mongo = require('./db/mongo');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const payload = req.body;
  const db = await mongo();
  const hash = await bcrypt.hash(payload.senha, 12);

  const verificaUsuario = await db.collection('users').findOne({
    email: payload.email
  });
  if (!verificaUsuario) {
    await db.collection('users').insertOne({
      nome: payload.nome,
      sobrenome: payload.sobrenome,
      anoDeNascimento: payload.anoDeNascimento,
      email: payload.email,
      senha: hash,
    });
    return res.status(201).json(payload);
  }
  return res.status(409).json('Email já cadastrado');
});

app.post('/login', async (req, res) => {
  const payload = req.body;
  const db = await mongo();
  const user = await db.collection('users').findOne({
    email: payload.email,
  });
  if (user) {
    const validacaoDeSenha = await bcrypt.compare(payload.senha, user.senha);
    if (validacaoDeSenha) {
      const token = jwt.sign(
        { email: user.email },
        process.env.TOKEN_SIGN,
        {
          expiresIn: "12h"
        }
      )
      return res.status(200).json(token);
    }
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return res.status(401).json({ message: 'Unauthorized' });
});

app.get('/logado', auth, (req, res) => {
  return res.status(200).json(req.user)
})

app.listen(3333);