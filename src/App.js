import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
