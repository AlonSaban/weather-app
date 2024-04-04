import '../src/styles/App.css';

function Table(data) {
    const days = data.days

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
                        <td>Temperature</td>
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
                            <td key={index}>{day.conditions}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table