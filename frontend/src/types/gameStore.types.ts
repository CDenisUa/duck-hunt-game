export interface GameState {
    isGameReady: boolean;
    isHit: boolean;
    hitPosition: { x: number; y: number } | null,
    round: number;
    isDuckSound: boolean;
    setIsGameReady: () => void;
    setIsHit: (value: boolean) => void;
    setRound: (value: number) => void;
    setIsDuckSound: (value: boolean) => void;
    setHitPosition: (pos: { x: number; y: number }) => void,
}
