// Core
import { create } from 'zustand';
// Types
import type { GameState } from "../types/gameStore.types";

const useGameStore = create<GameState>((set, get) => ({
    isGameReady: false,
    isHit: false,
    round: 0,
    setIsGameReady: () => set({ isGameReady: !get().isGameReady }),
    setIsHit: (value) => set({ isHit: value }),
    setRound: (value) => set({ round: value })
}));

export default useGameStore;