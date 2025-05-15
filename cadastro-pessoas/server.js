// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;




// Permitir ler dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos HTML, CSS e JS da pasta public
app.use(express.static('public'));


//3° parte ROTAS

// Rota para cadastrar pessoa
app.post('/cadastrar', (req, res) => {
  const { nome } = req.body;
  db.run("INSERT INTO pessoas (nome) VALUES (?)", [nome], (err) => {
    if (err) return res.status(500).send("Erro ao cadastrar");
    res.send("Pessoa cadastrada com sucesso!");
  });
});


// Rota para listar pessoas
app.get('/listar', (req, res) => {
  db.all("SELECT * FROM pessoas", [], (err, rows) => {
    if (err) return res.status(500).send("Erro ao buscar");
    res.json(rows);
  });
});


//4° PARTE RODAR O SERVIDOR
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
