const mongoose = require('mongoose')

const mongodbInit = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB is running @ ${conn.connection.host}`)
}

module.exports = mongodbInit