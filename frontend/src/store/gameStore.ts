// Core
import { create } from 'zustand';
// Types
import type { GameState } from "../types/gameStore.types";

const useGameStore = create<GameState>((set, get) => ({
    isGameReady: false,
    difficultyLevel: 'Easy',

    setDifficultyLevel: (difficultyLevel) => set({ difficultyLevel }),
    setIsGameReady: () => set({ isGameReady: !get().isGameReady }),}));

export default useGameStore;