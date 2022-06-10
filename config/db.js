const mongoose = require('mongoose');
const colors = require('colors')

const mongoConnection = async () =>{
    const connection = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true
    });
    console.log(`Conneted to Mongo DG at : ${connection.connection.host}`.bgYellow)
}
module.exports = mongoConnection;