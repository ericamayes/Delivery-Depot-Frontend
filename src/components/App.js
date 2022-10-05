// import logo from './logo.svg';
import '../App.css';
import Home from './Home'
import Contact from './Contact'
import Orders from './Orders'
import About from './About'
import RestaurantPage from './RestaurantPage';
import DishesPage from './DishesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  

    <div className="app">  
      <Router>
        <Routes>
            <Route exact path="/" element={
                <Home />
            }/>
            <Route path="/restaurants/:id/order" element={
                <DishesPage />
            }/>
            <Route path="/restaurants/:id" element={
                <RestaurantPage />
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
