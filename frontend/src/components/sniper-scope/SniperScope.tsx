// Core
import { type FC, useLayoutEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
// Styles
import styles from './styles.module.css';

const SniperScope: FC = () => {
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

    return (
        <motion.div
            className={styles['cursor']}
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: x,
                top: y,
            }}
        />
    );
};

export default SniperScope;
