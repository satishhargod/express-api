const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL
const db = mongoose.connect(DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database is connected')
}).catch((error)=>{
    console.log('Database connection error', error)
})

module.exports = db