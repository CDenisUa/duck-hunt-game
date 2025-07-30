// Types
import type {UserStoreTypes} from "../types/userStore.types.ts";

export const getSettingsByDifficulty = (difficultyLevel: UserStoreTypes["difficultyLevel"]) => {
    switch (difficultyLevel) {
        case 'Easy':
            return {
                interval: 1000,
                stiffness: 50,
                damping: 12,
            };
        case 'Medium':
            return {
                interval: 800,
                stiffness: 60,
                damping: 10,
            };
        case 'Hard':
            return {
                interval: 500,
                stiffness: 80,
                damping: 8,
            };
        default:
            return {
                interval: 1000,
                stiffness: 60,
                damping: 10,
            };
    }
};