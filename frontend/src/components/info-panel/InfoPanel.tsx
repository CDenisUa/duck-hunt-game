// Core
import { type FC } from 'react';
// Styles
import styles from './styles.module.css';
// Store
import { useGameStore, useUserStore } from "../../store";

const InfoPanel: FC = () => {
    const { round } = useGameStore();
    const { name, score, difficultyLevel } = useUserStore();

    console.log('difficultyLevel', difficultyLevel)
    return (
        <div className={styles['info-block']}>
            <p>Name: {name} </p>
            <p>Round: {round} </p>
            <p>Score: {score} </p>
            <p>Difficulty Level: {difficultyLevel} </p>
        </div>
    );
}

export default InfoPanel;