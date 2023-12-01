const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Bolo de Chocolate", preco: "R$ 50,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/chocolate.png"},
  {id: 2, nome: "Bolo de Limão", preco: "R$ 40,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/limao.png"},
  {id: 3, nome: "Bolo de Cenoura", preco: "R$ 35,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/cenoura.png"},
  {id: 4, nome: "Bolo de Maracuja", preco: "R$ 25,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/maracuja.png"},
  {id: 5, nome: "Bolo Vulcão Leite Ninho e Goiabada", preco: "R$ 45,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/ninho_goiabada.png"},
  {id: 6, nome: "Bolo de Milho", preco: "R$ 20,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/milho.png"},
  {id: 7, nome: "Bolo de Banana", preco: "R$ 25,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/banana.png"},
  {id: 8, nome: "Bolo de Laranja", preco: "R$ 35,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/laranja.png"},
  {id: 9, nome: "Bolo de Abacaxi", preco: "R$ 30,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/abacaxi.png"},
  {id: 10, nome: "Bolo de Chocolate Vegano", preco: "R$ 90,00", descricao: "Um bolo delicioso para comer em 1 dia", imagem: "/bolo_chocolate_vegano.png"}
]

function buscarProduto(id){
  const produto = produtos.find(produto => produto.id == id)
  return produto || null
}

app.get('/', function (req, res){
  res.render("index", { produtos })
})

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProduto(req.params.id)
  res.render('produtos', { produto })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});