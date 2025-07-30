// Core
import { type FC } from 'react';
// Components
import ShotSound from "../sounds/shoot-sound/ShootSound.tsx";
import QuackSound from "../sounds/quack-sound/QuackSound.tsx";

const GameSound: FC = () => (
        <>
            <ShotSound/>
            <QuackSound/>
        </>
);

export default GameSound;
