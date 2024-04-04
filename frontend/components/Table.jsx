import '../src/styles/App.css';
import sunImg from '../src/assets/sun.png'
import cloudy from '../src/assets/cloudy.png'
import clear from '../src/assets/clear.png'

function Table(data) {
    const days = data.days
    const weatherIcon = (condition) => {
        switch (condition) {
            case 'Partially cloudy':
                return sunImg;
            case 'rain':
                return 'rain.png';
            case 'overcast':
                return cloudy;
            case 'Clear':
                return clear;
            default:
                return 'unknown.png';
        }
    }
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        {days.map((day, index) => (
                            <th key={index}>{day.datetime}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Temperature (C)</td>
                        {days.map((day, index) => (
                            <td key={index}>{day.temp}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        {days.map((day, index) => (
                            <td key={index}>{day.humidity}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Conditions</td>
                        {days.map((day, index) => (
                            <td key={index}>
                                <img src={weatherIcon(day.conditions.split(',')[day.conditions.split(',').length - 1].trim())} width={50} />
                            </td>))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table