const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({

    name : {
        type : String,
        trim : true
    },
     status : {
        type : Boolean,
        default : false
     }


})


// expoer schema
module.exports = mongoose.model('Todo', todoSchema)