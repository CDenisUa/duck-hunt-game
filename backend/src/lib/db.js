// Core
import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = 'mongodb://root:password@localhost:27018';
    const mongoConnection = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected: ${mongoConnection.connection.host}`);
}