import {useEffect} from "react";
import {useGameStore, useUserStore} from "../store";

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
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [isHit, setIsHit]);

}

