/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs') // file system for grabbing files
const path = require('path') // better than '\/..\/' for portability
const Sequelize = require('sequelize')

const sequelize = new Sequelize('lun_db', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
})

// Load each model file
const models = Object.assign(
  {},
  ...fs
    .readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
    .map(function (file) {
      const model = require(path.join(__dirname, file))
      return {
        [model.name]: model.init(sequelize),
      }
    })
)

// Load model associations
for (const model of Object.keys(models)) {
  typeof models[model].associate === 'function' && models[model].associate(models)
}

sequelize.sync({ force: false })
module.exports = models
