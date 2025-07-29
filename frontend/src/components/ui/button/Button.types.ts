// Types
import {type ButtonHTMLAttributes, type DetailedHTMLProps, type ReactNode} from 'react';

export interface ButtonPropTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}