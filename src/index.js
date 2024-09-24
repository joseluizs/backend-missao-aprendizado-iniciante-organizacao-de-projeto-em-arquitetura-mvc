require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
const personagemRouter = require('./personagem/personagem.router')
//const { MongoClient, ObjectId } = require('mongodb')

//Declaramos a função main
async function main() {
  //FIX: utilizar o connectToDatabase() e receber o db
  await connectToDatabase()
  
  //const collection = db.collection('personagem')

  const app = express()

  //Milddlewares
  //Sinalizar para Express q estou usando JSON no body
  app.use(express.json())

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.use('/personagem', personagemRouter)

  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
  })
}
  
  // Executamos a função main()
  main()