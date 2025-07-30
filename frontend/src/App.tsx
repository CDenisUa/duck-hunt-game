// Core
import {useState} from "react";
// Styles
import './App.css'
// Store
import {useGameStore} from "./store";
// HOC
import {withChaoticFlight} from "./HOC/withChaoticFlight.tsx";
// Components
import Duck from './components/svg/duck/Duck';
import SniperScope from "./components/sniper-scope/SniperScope";
import GameSound from "./components/game-sound/GameSound";
import StartGame from "./components/start-game/StartGame";
import InfoPanel from "./components/info-panel/InfoPanel";
import { Popup } from "./components/ui";

function App() {
    const { isGameReady } = useGameStore();

    const ChaoticDuck = withChaoticFlight(Duck);

    const [hit, setHit] = useState(false);

    return (
        <div>
            {
                isGameReady &&
                <>
                    <ChaoticDuck
                        onClick={() => setHit(true)}
                        hit={hit}
                    />
                    <SniperScope/>
                    <GameSound />
                    <InfoPanel />
                </>
            }


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
