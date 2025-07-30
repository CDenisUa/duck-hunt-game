// Core
import AudioPlayer from "../../sound-player/SoundPlayer.tsx";
// Sound
import shootSound from '/sounds/quack.mp3';
// Store
import { useSoundStore  } from '../../../store'

const QuackSound = () => {
    const { duckSound } = useSoundStore();

    return (
        <AudioPlayer
            src={shootSound}
            playing={duckSound}
            loop
        />
    );
}

export default QuackSound;
