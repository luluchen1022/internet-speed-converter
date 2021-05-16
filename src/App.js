import './App.css';
import React, { useState } from 'react'
import { UnitControl } from './components/UnitControl'
import { CardFooter } from './components/CardFooter'
function App() {
  const [inputValue, setInputValue] = useState(0)
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div>
            <div className="converter-title">Set</div>
            <div><input className="converter-input" type="number" min="0" onChange={(e) => setInputValue(e.target.value)} value={inputValue}></input></div>
          </div>
          <div>
            <div className="converter-title">Show</div>
            <div><input className="converter-input" type="number" min="0" value={inputValue / 8} disabled></input></div>
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
