import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';
import './App.css';

const App = () => (
  <div className="App">
    <header className="hearder">
      <h1 className="main-heading">Math Magician</h1>
      <nav className="navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/calculator">Calculator</Link>
        <Link className="links" to="/quote">Quote</Link>
      </nav>
    </header>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);
export default App;
