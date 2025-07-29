import { type FC, useEffect, useRef, useState } from 'react';
// Sounds
import shotSound from '../../../public/sounds/awp.mp3';
import quackSound from '../../../public/sounds/quack.mp3';

const GameSound: FC = () => {
    const shotRef = useRef<HTMLAudioElement | null>(null);
    const quackRef = useRef<HTMLAudioElement | null>(null);
    const [isDuckVisible, setIsDuckVisible] = useState(true);
    const [isSoundInitialized, setIsSoundInitialized] = useState(false);

    const playSound = (audioElement: HTMLAudioElement | null) => {
        if (!audioElement) return;
        audioElement.currentTime = 0;
        audioElement.play().catch((e) => {
            console.warn('Sound playback failed:', e);
        });
    };

    const stopSound = (audioElement: HTMLAudioElement | null) => {
        if (!audioElement) return;
        audioElement.pause();
        audioElement.currentTime = 0;
    };

    const handleClick = (event: MouseEvent) => {
        if (event.button === 0) {
            if (isSoundInitialized) {
                playSound(shotRef.current);
                setIsDuckVisible(false);
            }
        }
    };

    useEffect(() => {
        const initSound = () => {
            if (!isSoundInitialized) {
                setIsSoundInitialized(true);
                playSound(quackRef.current);
            }
        };

        window.addEventListener('click', initSound, { once: true });
        return () => {
            window.removeEventListener('click', initSound);
        };
    }, [isSoundInitialized]);

    useEffect(() => {
        const quack = quackRef.current;
        if (isDuckVisible && isSoundInitialized && quack) {
            playSound(quack);
        } else {
            stopSound(quack);
        }
    }, [isDuckVisible, isSoundInitialized]);

    useEffect(() => {
        window.addEventListener('mousedown', handleClick);
        return () => {
            window.removeEventListener('mousedown', handleClick);
        };
    }, [isSoundInitialized]);

    return (
        <>
            <audio ref={shotRef} src={shotSound} preload="auto" />
            <audio ref={quackRef} src={quackSound} preload="auto" loop />
        </>
    );
};

export default GameSound;
