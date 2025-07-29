// Types
import type {GameState} from "./gameStore.types.ts";

export interface UserStoreTypes {
    id: string;
    name: string;
    score: number;
    difficultyLevel: GameState["difficultyLevel"];
    setUserName: (name: string) => void;
    setDifficultyLevel: (level: GameState["difficultyLevel"]) => void;
}