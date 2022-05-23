const Pessoa = require('../models/Pessoa');

const atualizarPessoa = async function (req,res){
  const pessoa = await Pessoa.findByPk(req.body.id);

  if(pessoa === null){
    res.status(400);
    res.send('Pessoa não encontrada');

  }else{
    
      pessoa.nome = req.body.nome;
      pessoa.save().then(p=>{
        res.status(200);
        res.send('OK')
      });
  }
}

const deletePessoa = async function (req, res){
  const pessoa = await Pessoa.findByPk(req.params.id);

  if(pessoa === null){
    res.status(400);
    res.send('Pessoa não encontrada');
    
  }else{

    pessoa.destroy().then(p=>{
      res.status(200);
      res.send('Deletado com Sucesso');
    });
  }
}
const addPessoa = async function(req,res){
  const pessoa = Pessoa.build(req.body);

  pessoa.save().then(p =>{
    res.status(200);
    res.send('ok');
  }).catch(err =>{
    console.log(err);
    res.status(400);
    res.send('Falha ao salvar');
  })
}

const getPessoa = async function(req, res)  {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if(pessoa === null) {
      res.status(400);
      res.send('Usuario não encontrado');
       
    }else {
      res.status(200);
      res.send(pessoa);
    }
  };

  module.exports = {getPessoa, addPessoa, deletePessoa, atualizarPessoa};