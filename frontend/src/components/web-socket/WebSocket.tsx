// Core
import { useEffect, type FC } from 'react';
import { socket } from '../../lib/socket';
// Store
import { useGameStore, useUserStore } from '../../store';

const WebSocket: FC = () => {
    const setServerMessage = useGameStore(state => state.setServerMessage);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('🔌 Socket connected:', socket.id);
            socket.emit('message', `Client connected [${socket.id}]`);
        });

        socket.on('disconnect', () => {
            console.log('⚠️ Socket disconnected');
        });

        socket.on('message', (msg: string) => {
            console.log('💬 Server message:', msg);
            setServerMessage(msg);
        });

        socket.on('updateGameState', ({ score, round }) => {
            useUserStore.setState({ score });
            useGameStore.setState({ round });
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
            socket.off('updateGameState');
        };
    }, []);

    return null;
};

export default WebSocket;
