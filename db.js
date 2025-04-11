const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/MPloyChek';


function ConnectDB()
{
    try {
        mongoose.connect(uri)
        console.log('Connect succesfully MPloyChek')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports=ConnectDB