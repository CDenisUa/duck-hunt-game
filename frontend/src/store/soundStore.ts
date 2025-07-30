// Core
import { create } from 'zustand';
// Types
import type { SoundStoreTypes } from "../types/soundStore.types";

const useGameStore = create<SoundStoreTypes>((set) => ({
    duckSound: false,
    shotSound: false,
    setDuckSound: (value) => set({ duckSound: value }),
    setShotSound: (value) => set({ shotSound: value }),
}));

export default useGameStore;