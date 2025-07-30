// Core
import {useEffect} from "react";
// Store
import {useGameStore, useUserStore, useSoundStore} from "../store";

export const useRestart = () => {
    const DEFAULT_SPLASH_DURATION = Number(import.meta.env.VITE_DEFAULT_SPLASH_DURATION) || 3000;
    const { setRound, round, isHit, setIsHit } = useGameStore();
    const { setScore, score } = useUserStore();
    const { setDuckSound } = useSoundStore();

    useEffect(() => {
        if (isHit) {
            const timeoutId = setTimeout(() => {
                setIsHit(false);
                if(score === 5) {
                    setScore(0);
                    setRound(round + 1);
                }
                setDuckSound(true);
            }, DEFAULT_SPLASH_DURATION);

            return () => clearTimeout(timeoutId);
        }
    }, [isHit, setIsHit]);

}

