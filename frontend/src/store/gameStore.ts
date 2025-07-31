// Core
import { create } from 'zustand';
// Types
import type { GameState } from "../types/gameStore.types";

const useGameStore = create<GameState>((set, get) => ({
    isGameReady: false,
    isHit: false,
    round: 0,
    isDuckSound: false,
    hitPosition: null,
    serverMessage: '',
    setServerMessage: (serverMessage: string) => set({ serverMessage }),
    setHitPosition: (hitPosition) => set({ hitPosition }),
    setIsGameReady: () => set({ isGameReady: !get().isGameReady }),
    setIsHit: (value) => set({ isHit: value }),
    setRound: (value) => set({ round: value }),
    setIsDuckSound: (value) => set({ isDuckSound: value }),
}));

export default useGameStore;