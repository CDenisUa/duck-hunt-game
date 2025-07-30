export interface GameState {
    isGameReady: boolean;
    isHit: boolean;
    round: number;
    isDuckSound: boolean;
    setIsGameReady: () => void;
    setIsHit: (value: boolean) => void;
    setRound: (value: number) => void;
    setIsDuckSound: (value: boolean) => void;
}
