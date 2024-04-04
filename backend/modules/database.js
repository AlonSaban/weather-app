import mongoose from "mongoose";
import 'dotenv/config'

let connection

async function connectDB() {
    connection = await mongoose.connect(process.env.MONGO_URL)
    console.log('connected to database')
}

export default connectDB