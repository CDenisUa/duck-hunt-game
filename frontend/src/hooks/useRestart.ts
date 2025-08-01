// Core
import {useEffect} from "react";
// Store
import {useGameStore, useSoundStore} from "../store";

export const useRestart = () => {
    const DEFAULT_SPLASH_DURATION = Number(import.meta.env.VITE_DEFAULT_SPLASH_DURATION) || 3000;
    const { isHit, setIsHit } = useGameStore();
    const { setDuckSound } = useSoundStore();

    useEffect(() => {
        if (isHit) {
            const timeoutId = setTimeout(() => {
                setIsHit(false);
                setDuckSound(true);
            }, DEFAULT_SPLASH_DURATION);

            return () => clearTimeout(timeoutId);
        }
    }, [isHit, setIsHit]);

}

