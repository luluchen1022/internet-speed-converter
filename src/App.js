import './App.css';
import React, { useState } from 'react'
import { UnitControl } from './components/UnitControl'
import { CardFooter } from './components/CardFooter'
import { Converter } from "./components/Converter"
function App() {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UnitControl />
          <Converter inputValue={inputValue} setInputValue={setInputValue} />
        </div>
        <CardFooter inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
