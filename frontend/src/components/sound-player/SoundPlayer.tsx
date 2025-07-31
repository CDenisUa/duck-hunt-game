// Core
import {
    useEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
    useState,
} from "react";
// Types
import type { AudioPlayerHandle, AudioPlayerProps } from "./SoundPlayer.types.ts";

const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
    (props, ref) => {
        const { src, playing, ...rest } = props;
        const audioRef = useRef<HTMLAudioElement>(null);
        const [canPlay, setCanPlay] = useState(false);

        useImperativeHandle(ref, () => ({
            play: () => audioRef.current?.play() ?? Promise.resolve(),
            pause: () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
            },
            audio: audioRef.current,
        }));

        useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;

            if (audio.src !== src) {
                setCanPlay(false);
                audio.src = src;
            }

            const handleCanPlay = () => setCanPlay(true);
            audio.addEventListener("canplaythrough", handleCanPlay);

            return () => {
                audio.removeEventListener("canplaythrough", handleCanPlay);
            };
        }, [src]);

        useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;

            if (playing && canPlay) {
                audio
                    .play()
                    .catch((err) => console.error("Audio play error:", err));
            } else if (!playing) {
                audio.pause();
                audio.currentTime = 0;
            }
        }, [playing, canPlay]);

        useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;

            const handleEnded = () => {
                audio.currentTime = 0;
            };

            audio.addEventListener("ended", handleEnded);
            return () => {
                audio.removeEventListener("ended", handleEnded);
            };
        }, []);

        return <audio ref={audioRef} {...rest} />;
    }
);

AudioPlayer.displayName = "AudioPlayer";
export default AudioPlayer;
