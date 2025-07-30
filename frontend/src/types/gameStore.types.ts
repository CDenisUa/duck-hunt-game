export interface GameState {
    isGameReady: boolean;
    isHit: boolean;
    round: number;
    setIsGameReady: () => void;
    setIsHit: (value: boolean) => void;
    setRound: (value: number) => void;
}
