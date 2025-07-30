export interface GameState {
    isGameReady: boolean;
    isHit: boolean;
    setIsGameReady: () => void;
    setIsHit: () => void;
}
