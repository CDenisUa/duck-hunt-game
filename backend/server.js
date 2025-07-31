// Core
import { Server as SocketIOServer } from 'socket.io';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'node:http';

dotenv.config();

const app = express();
const PORT = 5200;

const server = http.createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Socket
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    const player = {
        score: 0,
        round: 0,
    };

    socket.on('duckKilled', () => {
        player.score++;

        if (player.score === 5) {
            player.round++;
            player.score = 0;
        }

        console.log(`Duck killed! Score: ${player.score}, Round: ${player.round}`);

        socket.emit('updateGameState', {
            score: player.score,
            round: player.round,
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
