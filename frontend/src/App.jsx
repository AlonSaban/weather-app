import { useState } from 'react';
import axios from 'axios';
import './styles/App.css';

function App() {
  const [days, setDays] = useState([]);

  const printSearch = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    try {
      const res = await axios.post('http://localhost:8000/apicall', { searchTerm: searchValue });
      const firstSevenDays = res.data.days.slice(0, 7)
      setDays(firstSevenDays);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div>
        <h1>Search Weather:</h1>
        <form onSubmit={printSearch}>
          <input
            type="text"
            name="search"
            placeholder="Enter city name..."
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>

      {days.length > 0 && (
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
      )}
    </div>
  );
}

export default App;
