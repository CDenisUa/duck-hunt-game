// Core
import { type FC } from 'react';
// Styles
import styles from './styles.module.css';
// Store
import userStore from "../../store/userStore.ts";

const InfoPanel: FC = () => {
    const { name, score, difficultyLevel } = userStore();

    console.log('difficultyLevel', difficultyLevel)
    return (
        <div className={styles['info-block']}>
            <p>Name: {name} </p>
            <p>Score: {score} </p>
            <p>Difficulty Level: {difficultyLevel} </p>
        </div>
    );
}

export default InfoPanel;