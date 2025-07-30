// Types
import type {UserStoreTypes} from "../types/userStore.types.ts";

export const getRandomPosition = (difficultyLevel: UserStoreTypes["difficultyLevel"]) => {
    let maxOffset = 80;

    switch (difficultyLevel) {
        case 'Easy':
            maxOffset = 50;
            break;
        case 'Medium':
            maxOffset = 80;
            break;
        case 'Hard':
            maxOffset = 90;
            break;
    }

    return {
        top: Math.random() * maxOffset + '%',
        left: Math.random() * maxOffset + '%',
    };
};