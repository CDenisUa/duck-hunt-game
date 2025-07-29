// Core
import { type FC } from 'react';
import cx from 'classnames';
// Styles
import styles from './styles.module.css';
// Types
import type { ButtonPropTypes } from './Button.types';

const Button: FC<ButtonPropTypes> = (props) => {
    const {
        children,
        className,
        ...otherProps
    } = props;

    return (
        <button
            className={cx(
                styles['button'],
                className,
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;