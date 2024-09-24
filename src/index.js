require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
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

  //FIXME: mover isso para a pasta personagem
  /*
  //Endpoint Read all [GET] /personagem 
  app.get('/personagem', async function (req, res) {
    //acessamos a lista de item na collection do mongodb
    const items = await collection.find().toArray()

    //enviamos a lista de items como resultado
    res.send(items)
  })

  //Endpoint Read By ID [GET]/personagem/:id
  app.get('/personagem/:id', async function (req, res) {
    //acessamos o parametro de rota id
    const id = req.params.id

    //acessar o item da lista usando o ID - 1
    const item = await collection.findOne({ _id: new ObjectId(id)})

    //checamos se o item obtido é existente
    if (!item) {
      return res.status(404).send('Item não encontrado!')
    }
    //Enviamos o item como resposta
    res.send(item)
  })

  

  //Endpoint Create [POST]/personagem
  app.post('/personagem', async function (req, res) {
    //acessamos o body da requisição
    const novoItem = req.body

    

    //checar se o nome esta presento no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send('Corpo da requisição deve conter a propriedade ´nome´.')
    }


    //testar se tem item duplicado
    // if (lista.includes(novoItem)) {
    // return res.status(409).send('Já existe este item na lista.')
    // }


    //adicionar na collection
    //lista.push(novoItem)
    await collection.insertOne(novoItem)

    //exibir uma msg de sucesso
    res.status(201).send(novoItem)
  })

  //Endpoint Update [PUT]/personagem/:id
  app.put('/personagem/:id', async function (req, res) {
    //acessamos o ID dos parametros da rota
    const id = req.params.id

    //checar pra ver se o ID - 1 esta na lista
    //exibir uma msg caso não esteja
    // if (!lista[id - 1]) {
    //   return res.status(404).send('Item não encontrado!')
    // }

    //acessamos o body da requisição
    const novoItem = req.body


    //checar se o nome esta presente no body
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send('Corpo da requisição deve conter a propriedade ´nome´.')
    }

    //checar se tem item duplicado
    // if (lista.includes(novoItem)) {
    //   return res.status(409).send('Já existe este item na lista.')
    // }

    //atualizamos na collection o novoItem pelo ID
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: novoItem }
    )

    //enviamos uma resposta de sucesso
    res.send(novoItem)
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