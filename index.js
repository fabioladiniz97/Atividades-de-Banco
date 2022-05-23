//console.log('Hello World'); primeiro teste 

//require ('dotenv').config(); // 'esconder' informações do banco 

//console.log(process.env.NOME);

// const sequelize = require('./banco/bd');
//console.log(sequelize);

// async function autenticar() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// };

// autenticar();

const express = require('express');
const app = express();
app.use(express.json());

const pessoaController = require('./controllers/pessoaController')

app.get('/pessoas/:id', pessoaController.getPessoa);

app.post('/pessoas', pessoaController.addPessoa);

app.delete('/pessoas/:id', pessoaController.deletePessoa);

app.put('/pessoas', pessoaController.atualizarPessoa);
    

  app.listen(3000);

// mandar req sempre é get 

