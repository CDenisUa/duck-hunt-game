// Core
import { create } from 'zustand';
// Types
import type { UserStoreTypes } from '../types/userStore.types';
import type { GameState } from '../types/gameStore.types';


const useGameStore = create<UserStoreTypes>((set) => ({
        id: '',
        name: '',
        score: 0,
        difficultyLevel: 'Easy',

        setUserName: (name: string) => set({ name }),
        setDifficultyLevel: (difficultyLevel: GameState["difficultyLevel"]) => set({ difficultyLevel }),
}));

export default useGameStore;