export interface UserStoreTypes {
    id: string;
    name: string;
    score: number;
    difficultyLevel: 'Easy' | 'Medium' | 'Hard';
    setUserName: (name: string) => void;
    setDifficultyLevel: (level: UserStoreTypes['difficultyLevel']) => void;
}