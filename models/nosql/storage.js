const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename: {
            type:Number
        },
    },
    {
        timestamps: true,  //se encarga de registrar el createdAt y el UpdateAt
        versionKey: false
    }
    )

    module.exports = mongoose.model("storage", StorageScheme)