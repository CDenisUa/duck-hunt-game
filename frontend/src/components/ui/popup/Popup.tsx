// Core
import {type FC, type ReactNode, useLayoutEffect, useRef} from 'react';
import { createPortal } from 'react-dom';
// Styles
import styles from './styles.module.css';

interface PopupProps {
    children: ReactNode;
    onClose?: () => void;
}

const Popup: FC<PopupProps> = ({ children, onClose }) => {
    const elRef = useRef<HTMLDivElement | null>(null);

    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useLayoutEffect(() => {
        const el = elRef.current!;
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
        };
    }, []);

    return createPortal(
        <div
            className={styles['popup-container']}
            onClick={onClose}
        >
            <div
                className={styles['popup-child-container']}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        elRef.current
    );
};

export default Popup;
