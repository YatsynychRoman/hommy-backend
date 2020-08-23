const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('postgres', 'postgres', 'qasdr432', {host: 'localhost', dialect: 'postgres'})
        const models = {}
        function getModels() {
            fs.readdir('./database/models', (err, file) => {
                file.forEach(file => {
                    const [modelName] = file.split('.')
                    models[modelName] = client.import(path.resolve(`./database/models/${modelName}.model`));
                })
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