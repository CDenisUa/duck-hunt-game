// Core
import {useEffect} from "react";
// Store
import {useGameStore, useUserStore} from "../store";

const DEFAULT_SPLASH_DURATION = 3000;

export const useRestart = () => {
    const { setRound, round, isHit, setIsHit } = useGameStore();
    const { setScore, score } = useUserStore();

    useEffect(() => {
        if (isHit) {
            const timeoutId = setTimeout(() => {
                setIsHit(false);
                if(score === 5) {
                    setScore(0);
                    setRound(round + 1);
                }
            }, DEFAULT_SPLASH_DURATION);

            return () => clearTimeout(timeoutId);
        }
    }, [isHit, setIsHit]);

}

