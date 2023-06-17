const mongoose = require('mongoose')




const mongoConnect = () => {
        try {
            const connect = mongoose.connect(process.env.MONGO_STRING)
            console.log('MongoDB Connected!');
        } catch (error) {
            console.log(error.message);
        }
}


// expoert mongo connection
module.exports = mongoConnect