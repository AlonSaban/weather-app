import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '../components/Table'
import '../src/styles/App.css';

function Home() {
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
        <div className="container">
            <div className="history">
                <Link to={{ pathname: '/history' }}>History</Link>
            </div>
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
                    <Table days={days} />
                )}
            </div>
        </div>
    )
}

export default Home;
