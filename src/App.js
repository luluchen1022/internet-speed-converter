import './App.css';
import React, { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState(0)
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <div className="unit-control">
          <div className="unit">Mbps</div>

          <div className="unit">MB/s</div>
        </div>
        <div className="converter">
          <div>
            <div className="converter-title">Set</div>
            <div><input className="converter-input" type="number" min="0" onChange={(e) => setInputValue(e.target.valNaue)} value={inputValue}></input></div>
          </div>
          <div>
            <div className="converter-title">Show</div>
            <div><input className="converter-input" type="number" min="0" value={inputValue / 8} disabled></input></div>
          </div>
        </div>
      </div>
      <div className="card-footer">Fast</div>
    </div>
  );
}

export default App;
