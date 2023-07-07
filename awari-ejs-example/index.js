const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('template.ejs');
});

app.listen(3001,() => {
    console.log("Servidor rodando em http://localhost:3001");
});