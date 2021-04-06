const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('lun-db', 'postgres', 'postgres', {host: 'localhost', dialect: 'postgres'})
        const models = {}
        function getModels() {
            fs.readdir('./database/models', async (err, file) => {
                file.forEach(file => {
                    const [modelName] = file.split('.')
                    models[modelName] = client.import(path.resolve(`./database/models/${modelName}.model`));
                })
                await client.sync({ force: true });
            })
        }

        return {
            setModels: () => getModels(),
            getModel: modelName => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) instance = initConnection()
            return instance
        }
    }
})()