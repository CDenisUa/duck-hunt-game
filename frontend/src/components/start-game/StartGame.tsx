// Core
import { type FC, useState, type FormEvent, useEffect, useRef } from 'react';
// Styles
import styles from './styles.module.css';
// Types
import { type UserStoreTypes } from '../../types/userStore.types'
// Store
import { useGameStore, useUserStore } from "../../store";
// Utils
import { getFullScreen } from "../../utils/getFullScreen.ts";
// Components
import { Button } from "../ui";

const StartGame: FC = () => {
    const { setIsGameReady } = useGameStore();
    const { setUserName, setDifficultyLevel, difficultyLevel } = useUserStore();

    const [name, setName] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const levelOfDifficult: UserStoreTypes['difficultyLevel'][] = ['Easy', 'Medium', 'Hard'];

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || !difficultyLevel) {
            alert("Please enter your name and select a difficulty level.");
            return;
        }

        setUserName(name);
        setDifficultyLevel(difficultyLevel);
        setIsGameReady();

        getFullScreen().catch(error => console.error(error))
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles['user-block']}>
                <p className={styles['user-title']}>User Name:</p>
                <input
                    ref={inputRef}
                    className={styles['input']}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div className={styles['button-container']}>
                {levelOfDifficult.map((level) => (
                    <Button
                        type="button"
                        style={{ background: '#38a8f2' }}
                        key={level}
                        onClick={() => setDifficultyLevel(level)}
                    >
                        {level}
                    </Button>
                ))}
            </div>

            <div className={styles['start-button']}>
                <Button style={{ background: '#71b800' }} type="submit">
                    Start Game
                </Button>
            </div>
        </form>
    );
};

export default StartGame;
