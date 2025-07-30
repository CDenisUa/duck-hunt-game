// Types
import type { FullscreenElement } from "../components/start-game/StartGame.types.ts";

export const getFullScreen = async () => {
    const root = document.documentElement as FullscreenElement;

    try {
        if (root.requestFullscreen) {
            await root.requestFullscreen();
        } else if (root.webkitRequestFullscreen) {
            await root.webkitRequestFullscreen();
        } else if (root.msRequestFullscreen) {
            await root.msRequestFullscreen();
        }
    } catch (error) {
        console.error('Fullscreen request failed:', error);
    }
}