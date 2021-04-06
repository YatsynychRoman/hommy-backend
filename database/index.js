const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

module.exports = (() => {
    let instance;

    function initConnection() {
<<<<<<< HEAD
        const client = new Sequelize('lun_db', 'postgres', 'postgres', { host: 'localhost', dialect: 'postgres' })
=======
        const client = new Sequelize('lun_db', 'postgres', 'postgres', {host: 'localhost', dialect: 'postgres'})
>>>>>>> ec86ed98e88e6f34ad95ba59e4e3fcdffcf2d7f5
        const models = {}
        function getModels() {
            fs.readdir('./database/models', async (err, file) => {
                file.forEach(file => {
                    const [modelName] = file.split('.')
                    models[modelName] = client.import(path.resolve(`./database/models/${modelName}.model`));
                })
                await client.sync({ force: false });
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