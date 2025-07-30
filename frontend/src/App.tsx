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
    const { isGameReady, isHit, setIsHit } = useGameStore();

    const ChaoticDuck = withChaoticFlight(Duck);

    return (
        <div>
            {
                isGameReady &&
                <>
                    <ChaoticDuck
                        onClick={() => setIsHit()}
                        hit={isHit}
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
