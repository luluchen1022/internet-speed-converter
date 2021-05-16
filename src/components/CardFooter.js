export const CardFooter = ({ inputValue }) => {
    let criteria = {};
    if (!inputValue) {
        criteria = {
            title: '----',
            backgroundColor: "#dddddd",
        }
    } else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: "indianred",
        }
    } else if (inputValue < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: "lightSkyBlue",
        }
    } else if (inputValue >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: "darkseagreen",
        }
    }
    return (<div className="card-footer" style={{ backgroundColor: criteria.backgroundColor }}>{criteria.title}</div>)
}