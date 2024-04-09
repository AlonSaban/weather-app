import { Link } from 'react-router-dom';


function History() {

    return (
        <div>
            <div className="home">
                <Link to={{ pathname: '/' }}>Home</Link>
            </div>
            <div>This is the history page</div>
        </div>
    )
}

export default History