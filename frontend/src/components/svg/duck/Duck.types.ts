// Types
import type {GameState} from "../../../types/gameStore.types";

export type DuckPropTypes = Pick<GameState, "isHit" | "setIsHit">;
