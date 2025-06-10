import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import routes from './routes.js';


dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())
app.use('/api' , routes)

connectDB()

const PORT = process.env.PORT || 8000
app.listen(PORT , ()=>{
    console.log(`server started on ${PORT}`)
})