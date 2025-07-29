// Core
import {useState} from "react";
// Styles
import './App.css'
// Store
import {useGameStore} from "./store";
// Components
import Duck from './components/svg/duck/Duck';
import SniperScope from "./components/sniper-scope/SniperScope";
import GameSound from "./components/game-sound/GameSound";
import StartGame from "./components/start-game/StartGame.tsx";
import { Popup } from "./components/ui";

function App() {
    const { isGameReady } = useGameStore();
    const [hit, setHit] = useState(false);

    return (
        <div>
            <Duck
                onClick={() => setHit(true)}
                hit={hit}
            />
            <SniperScope/>
            <GameSound />
            {
                !isGameReady &&
                <Popup>
                    <StartGame />
                </Popup>
            }

        </div>
    )
}

export default App
