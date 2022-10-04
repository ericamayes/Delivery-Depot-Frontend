// import logo from './logo.svg';
import '../App.css';
import Home from './Home'
import Contact from './Contact'
import Orders from './Orders'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  

    <div className="app">  
      <Router>
        <Routes>
            <Route exact path="/" element={
                <Home />
            }/>
            <Route path="/orders" element={
                <Orders />
            }/>
            <Route path="/contact" element={
                <Contact />
            }/>
            <Route path="/about" element={
                <About />
            }/>
            </Routes>        
        </Router>
    </div>
)};

export default App;
