// Core
import {io} from "socket.io-client";

export const socket = io('http://localhost:5200', {
    withCredentials: true,
});