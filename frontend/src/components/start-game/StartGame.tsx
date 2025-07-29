// Core
import { type FC, useState,type FormEvent } from 'react';
// Styles
import styles from './styles.module.css';
// Store
import { useGameStore, useUserStore } from "../../store";
// Components
import { Button } from "../ui";

const StartGame: FC = () => {
    const { setDifficultyLevel, difficultyLevel, setIsGameReady} = useGameStore();
    const { setUserName } = useUserStore();
    const [name, setName] = useState('');

    const levelOfDifficult: Array<'Easy' | 'Medium' | 'Hard'> = ['Easy', 'Medium', 'Hard'];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || !difficultyLevel) {
            alert("Please enter your name and select a difficulty level.");
            return;
        }

        setUserName(name);
        setDifficultyLevel(difficultyLevel);
        setIsGameReady();
        console.log('Starting game with:');
        console.log('User:', name);
        console.log('Difficulty:', difficultyLevel);


    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['user-block']}>
                <p className={styles['user-title']}>User Name:</p>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div className={styles['score-block']}>
                <p>Score:</p>
                <p className={styles['score']}>0</p>
            </div>

            <div className={styles['button-container']}>
                {levelOfDifficult.map((level) => (
                    <Button
                        type='button'
                        key={level}
                        onClick={() => setDifficultyLevel(level)}
                    >
                        {level}
                    </Button>
                ))}
            </div>

            <div className={styles['start-button']}>
                <Button type="submit">Start Game</Button>
            </div>
        </form>
    );
}

export default StartGame;