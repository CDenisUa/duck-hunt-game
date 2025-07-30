// Core
import { type FC, useLayoutEffect, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
// Styles
import styles from './styles.module.css';
// Store
import { useGameStore } from '../../store';
// Components
import DuckSplash from "../svg/duck-splash/DuckSplash";

const SniperScope: FC = () => {
    const { isHit, setHitPosition, hitPosition } = useGameStore();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseMove = (event: MouseEvent) => {
        x.set(event.clientX);
        y.set(event.clientY);
    };

    useLayoutEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    useEffect(() => {
        if (isHit) {
            setHitPosition({ x: x.get(), y: y.get() });
        }
    }, [isHit]);

    return (
        <>
            <motion.div
                className={styles['cursor']}
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    left: x,
                    top: y,
                    zIndex: 1001
                }}
            />

            {
                isHit && hitPosition && (
                <svg
                    style={{
                        position: 'absolute',
                        left: hitPosition.x - 48,
                        top: hitPosition.y - 32,
                        width: 64,
                        height: 64,
                        overflow: 'visible',
                        pointerEvents: 'none',
                    }}
                >
                    <DuckSplash isHit={true} />
                </svg>)
            }
        </>
    );
};

export default SniperScope;
