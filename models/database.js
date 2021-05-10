const mongoose = require('mongoose');

class DatabaseConnection {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://localhost:27017/inventory`,{ useNewUrlParser: true },{ useUnifiedTopology: true} )
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new DatabaseConnection()