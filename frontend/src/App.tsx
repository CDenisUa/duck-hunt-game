// Store
import {useGameStore, useSoundStore } from "./store";
// HOC
import { withChaoticFlight } from "./HOC/withChaoticFlight.tsx";
// Hooks
import {useRestart} from "./hooks/useRestart";
// Utils
import { socket } from './lib/socket.ts';
// Components
import Duck from './components/svg/duck/Duck';
import SniperScope from "./components/sniper-scope/SniperScope";
import GameSound from "./components/game-sound/GameSound";
import StartGame from "./components/start-game/StartGame";
import InfoPanel from "./components/info-panel/InfoPanel";
import WebSocket from "./components/web-socket/WebSocket";
import { Popup } from "./components/ui";

function App() {
    const { isGameReady, isHit, setIsHit } = useGameStore();
    const { setDuckSound } = useSoundStore();

    const ChaoticDuck = withChaoticFlight(Duck);

    const handleHit = () => {
        socket.emit('duckKilled');
        setIsHit(true);
        setDuckSound(false)
    }

    useRestart()

    return (
        <div>
            <WebSocket />
            {
                isGameReady
                    ?
                        <>
                            <ChaoticDuck
                                setIsHit={handleHit}
                                isHit={isHit}
                            />
                            <SniperScope />
                            <GameSound />
                            <InfoPanel />
                        </>
                    :
                        <Popup>
                            <StartGame />
                        </Popup>
            }
        </div>
    );
}

export default App;
