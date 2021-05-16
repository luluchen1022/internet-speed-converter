import './App.css';

function App() {
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
            <div><input type="number" min="0"></input></div>
          </div>
          <div>
            <div className="converter-title">Show</div>
            <div><input type="number" min="0"></input></div>
          </div>
        </div>
      </div>
      <div className="card-footer">Fast</div>
    </div>
  );
}

export default App;
