// Styles
import './App.css'
// Components
import Duck from './components/svg/duck/Duck';
import {useState} from "react";

function App() {
    const [hit, setHit] = useState(false);
  return (
    <div>
      <Duck
          onClick={() => setHit(true)}
          hit={hit}
      />
    </div>
  )
}

export default App
