export interface GameState {
    isGameReady: boolean;
    difficultyLevel: 'Easy' | 'Medium' | 'Hard';
    setDifficultyLevel: (level: GameState["difficultyLevel"]) => void;
    setIsGameReady: () => void;
}
