const  mongoose  = require("mongoose")
require('dotenv').config()



const dbServer = process.env.dbServer

mongoose.connect(dbServer).then(res=>{
    console.log("Database connected to Server");
    
}).catch(err=>{
    console.log("Connection faild",err);
    
})
