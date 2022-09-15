import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/checkout" element={<><Navbar /> <Checkout /> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
