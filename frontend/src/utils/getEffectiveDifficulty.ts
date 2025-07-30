// Types
import type { UserStoreTypes } from "../types/userStore.types.ts";

export const getEffectiveDifficulty = (base: UserStoreTypes["difficultyLevel"], round: number): UserStoreTypes["difficultyLevel"] => {

    if (base === "Hard") return "Hard";

    if (base === "Medium") {
        return round >= 3 ? "Hard" : "Medium";
    }

    if (round >= 3) return "Hard";
    if (round >= 1) return "Medium";

    return "Easy";
}