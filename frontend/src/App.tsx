// Store
import { useGameStore, useUserStore } from "./store";
// HOC
import { withChaoticFlight } from "./HOC/withChaoticFlight.tsx";
// Hooks
import {useRestart} from "./hooks/useRestart";
// Components
import Duck from './components/svg/duck/Duck';
import SniperScope from "./components/sniper-scope/SniperScope";
import GameSound from "./components/game-sound/GameSound";
import StartGame from "./components/start-game/StartGame";
import InfoPanel from "./components/info-panel/InfoPanel";
import { Popup } from "./components/ui";

function App() {
    const { isGameReady, isHit, setIsHit } = useGameStore();
    const { setScore, score } = useUserStore();
    const ChaoticDuck = withChaoticFlight(Duck);

    const handleHit = () => {
        setScore(score + 1);
        setIsHit(true);
    }

    useRestart()

    return (
        <div>
            {isGameReady ? (
                <>
                    <ChaoticDuck
                        setIsHit={handleHit}
                        isHit={isHit}
                    />
                    <SniperScope />
                    <GameSound />
                    <InfoPanel />
                </>
            ) : (
                <Popup>
                    <StartGame />
                </Popup>
            )}
        </div>
    );
}

export default App;
