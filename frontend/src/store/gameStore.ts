// Core
import { create } from 'zustand';
// Types
import type { GameState } from "../types/gameStore.types";

const useGameStore = create<GameState>((set, get) => ({
    isGameReady: false,
    isHit: false,
    setIsGameReady: () => set({ isGameReady: !get().isGameReady }),
    setIsHit: () => set({ isHit: !get().isHit })})
);

export default useGameStore;