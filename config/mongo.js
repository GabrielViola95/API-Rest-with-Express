const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION CORRECTA ****')
        } else {
            console.log('***** ERROR DE CONEXION ****')
        }
    })
}

module.exports = dbConnect

// mongodb+srv://gabijbcalchaqui:Hn2KF3V!gTWEWEW@cluster0.qywxk.mongodb.net/dbapi?retryWrites=true&w=majority