import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/History';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/history" exact element={<History/>} />

      </Routes>
    </Router>
  );
};

export default App;