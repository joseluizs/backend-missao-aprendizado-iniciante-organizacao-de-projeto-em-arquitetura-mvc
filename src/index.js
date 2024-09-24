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

  //FIXME: mover isso para a pasta personagem
  /*

  //Endpoint Update [PUT]/personagem/:id
  app.put('/personagem/:id', async function (req, res) {
    
  })

  //Endpoint Delete [DELETE]/personagem/:id
  app.delete('/personagem/:id', async function (req, res) {
    //acessamos o parametro de rota
    const id = req.params.id

    //checar pra ver se o ID - 1 esta na lista
    //exibir uma msg caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado!')
    // }

    //remover o item da Collection usando o ID
    await collection.deleteOne({ _id: new ObjectId(id) })

    //Enviamos uma msg sucesso
    res.send('Item deletado com sucesso! ' + id)
  })*/

    app.listen(3000, function () {
      console.log("Servidor rodando em http://localhost:3000")
    })
  }
  
  // Executamos a função main()
  main()