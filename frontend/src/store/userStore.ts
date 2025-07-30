// Core
import { create } from 'zustand';
// Types
import type { UserStoreTypes } from '../types/userStore.types';

const useGameStore = create<UserStoreTypes>((set) => ({
        id: '',
        name: '',
        score: 0,
        difficultyLevel: 'Easy',

        setUserName: (name: string) => set({ name }),
        setDifficultyLevel: (difficultyLevel: UserStoreTypes["difficultyLevel"]) => set({ difficultyLevel }),
}));

export default useGameStore;