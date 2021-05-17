export const Converter = ({ inputValue, setInputValue }) => {
    return (
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
    )
}