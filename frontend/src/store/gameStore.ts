// store/gameStore.ts
import { create } from 'zustand';

type GameState = {
    rounds: number
    hits: number
    isDuckFlying: boolean
    duckId: number
    setDuckFlying: (isFlying: boolean) => void
    incrementRound: () => void
    incrementHit: () => void
    setDuckId: (id: number) => void
}

export const useGameStore = create<GameState>((set) => ({
    rounds: 0,
    hits: 0,
    isDuckFlying: false,
    duckId: 0,
    setDuckFlying: (isFlying) => set({ isDuckFlying: isFlying }),
    incrementRound: () => set((state) => ({ rounds: state.rounds + 1 })),
    incrementHit: () => set((state) => ({ hits: state.hits + 1 })),
    setDuckId: (id) => set({ duckId: id }),
}));
