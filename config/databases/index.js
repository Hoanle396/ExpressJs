const mongoose = require('mongoose')

async function connect() {  
    try {
        await mongoose.connect('mongodb://localhost:27017/study',{
          useNewUrlParser : true,
          useUnifiedTopology : true
        })
        console.log('Connect successful')
    } catch (error) {
        console.error(error)
    }
}
module.exports={connect}