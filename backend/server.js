// Core
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// Lib
import { connectDB } from "#src/lib/db.js";

dotenv.config();

const app = express();
const PORT = 5200;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.get('/', (req, res) => {
    res.status(200).json({
        data: 'hello world'
    })
})

app.listen(5200, () => {
    console.log(`Listening on port ${PORT}`);
    connectDB().catch((error) => console.log("MongoDB connection error:", error));
});