// Types
import type {AudioHTMLAttributes} from "react";

export interface AudioPlayerProps extends AudioHTMLAttributes<HTMLAudioElement> {
    src: string;
    playing: boolean;
    resetOnPause?: boolean;
}

export interface AudioPlayerHandle {
    play: () => Promise<void>;
    pause: () => void;
    audio: HTMLAudioElement | null;
}