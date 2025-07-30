// Types
import type { UserStoreTypes } from "../types/userStore.types.ts";
// Utils
import { getEffectiveDifficulty } from "./getEffectiveDifficulty.ts";

export const getSettingsByDifficulty = (
    baseDifficulty: UserStoreTypes["difficultyLevel"],
    round: number
): {
    type: UserStoreTypes["difficultyLevel"],
    interval: number,
    stiffness: number,
    damping: number,
} => {
    const effectiveDifficulty = getEffectiveDifficulty(baseDifficulty, round);

    switch (effectiveDifficulty) {

        case 'Easy':
            return {
                type: 'Easy',
                interval: 1000,
                stiffness: 50,
                damping: 12,
            };
        case 'Medium':
            return {
                type: 'Medium',
                interval: 800,
                stiffness: 60,
                damping: 10,
            };
        case 'Hard':
        default:
            return {
                type: 'Hard',
                interval: 500,
                stiffness: 80,
                damping: 8,
            };
    }
};

