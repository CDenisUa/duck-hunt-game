// Core
import {type FC, useEffect, useRef} from 'react';
// Audio
import shootSound from '/sounds/awp.mp3';

const GunshotOnClick: FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(shootSound);

        const handleClick = () => {
            const shot = new Audio(shootSound);
            shot.play().catch((error) => {
                console.error('Failed to play shot sound:', error);
            });
        };

        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return null;
};

export default GunshotOnClick;
