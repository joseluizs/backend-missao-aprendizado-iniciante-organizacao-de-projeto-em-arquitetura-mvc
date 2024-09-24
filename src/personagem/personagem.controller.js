const service = require('./personagem.service')

async function readAll(req, res) {
  //Acessamos a lista de personagens no service
  const items = await service.readAll()

  //Enviamos a lista do personagem como resultado
  res.send(items)
}

async function readById(req, res) {
  //acessamos o parametro de rota id
  const id = req.params.id

  //Acessamos o personagem no service através do ID
  const item = await service.readById(id)
  
  //checamos se o item obtido é existente
  if (!item) {
    return res.status(404).send('Item não encontrado!')
  }

  //Enviamos o item como resposta
  res.send(item)
}

async function create(req, res) {
  //acessamos o body da requisição
  const newItem = req.body

  //checar se o nome esta presento no body
  if (!newItem || !newItem.nome) {
    return res.status(400).send('Corpo da requisição deve conter a propriedade ´nome´.')
  }

  //adicionar no banco através do Service
  await service.create(newItem)

  //exibir uma msg de sucesso
  res.status(201).send(newItem)

}

function updateById(req, res) {
  res.send('Update By Id')
}

function deleteById(req, res) {
  res.send('Delete By Id')
}

module.exports = {
  readAll, readById, create, updateById, deleteById
}