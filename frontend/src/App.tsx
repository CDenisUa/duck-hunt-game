// Styles
import './App.css'
// Components
import Duck from './components/svg/duck/Duck';
import {useState} from "react";
import SniperScope from "./components/sniper-scope/SniperScope.tsx";

function App() {
    const [hit, setHit] = useState(false);
    return (
        <div>
            <Duck
                onClick={() => setHit(true)}
                hit={hit}
            />
            <SniperScope/>
        </div>
    )
}

export default App
