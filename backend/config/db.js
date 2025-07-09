import mongoose from "mongoose";
import jsonlogger from 'node-mongodb-logger'


export const connectDB = async () =>{
    await mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('DB connected') ;
        jsonlogger();
    })
}