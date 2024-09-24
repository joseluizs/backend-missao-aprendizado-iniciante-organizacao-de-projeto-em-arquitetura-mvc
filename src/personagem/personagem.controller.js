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

function create(req, res) {
  res.send('Create')
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