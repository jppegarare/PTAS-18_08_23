const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Ola' });
});

app.get('/contatos', (req, res) => {
  res.render('contatos', { message: 'Oi' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});