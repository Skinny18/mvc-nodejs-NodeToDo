const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
})


try{

    sequelize.authenticate()
    console.log('Conectou ao MySQL!')

}catch(error){
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize