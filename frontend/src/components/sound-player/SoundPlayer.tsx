// Core
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import type {AudioPlayerHandle, AudioPlayerProps} from "./SoundPlayer.types.ts";

const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
    (props, ref) => {
        const { src, playing, ...rest } = props;
        const audioRef = useRef<HTMLAudioElement>(null);

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
            if (audioRef.current && audioRef.current.src !== src) {
                audioRef.current.src = src;
                if (playing) {
                    audioRef.current
                        .play()
                        .catch((err) => console.error("Audio play error:", err));
                }
            }
        }, [src, playing]);

        useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;

            if (playing) {
                audio.play().catch((err) => console.error("Audio play error:", err));
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }, [playing]);

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
