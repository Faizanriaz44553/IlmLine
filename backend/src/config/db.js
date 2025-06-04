import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`message===> ${error.message}`); 
    }
}

export default connectDB