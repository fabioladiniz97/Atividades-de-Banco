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

const Pessoa = require('./models/Pessoa');

(async () => {
//    const pessoa = Pessoa.build({nome:"Fabíola Diniz"});
//     await pessoa.save()
//         .then(console.log('Salvo com sucesso!'))
//         .catch(error =>{
//             console.log(error);
//     });
    Pessoa.findAll().then(p=>{
        console.log(p);
    });
       
})();