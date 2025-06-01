const express = require('express')
const app = express()
const port = 3001;

app.get('/', (req, res) =>{
  res.send("Olá... Bem-vindo!")
})

app.listen(port, () =>{
  console.log(`Servidor rodando em http://localhost:${port}`);
})

app.use(express.json())
app.post('/filmes', (req,res)=>{
  const {titulo, genero} = req.body
  res.send(`Filme:${titulo}- Genero: ${genero}, recebido...`)
})