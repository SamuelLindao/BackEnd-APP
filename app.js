const express = require('express')
const app = express()
const port = 3001;

app.use(express.json()) // ← Sempre antes das rotas!

app.get('/', (req, res) =>{
  res.send("Olá... Bem-vindo!")
})

app.post('/filmes', (req,res)=>{
  const {titulo, genero} = req.body
  res.send(`Filme:${titulo} Genero: ${genero}, recebido...`)
})

app.listen(port, () =>{
  console.log(`Servidor rodando em http://localhost:${port}`);
})

const log = (req, res, next)=>{
  console.log(`................. Acessado em ${new Date()}`)
  next();
}

app.get('/transfere', log, (req,res) =>{
  res.send("Ok! Valor Transferido com sucesso...")
})
