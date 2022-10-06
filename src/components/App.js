// import logo from './logo.svg';
import React, {useState} from 'react';
import '../App.css';
import Home from './Home'
import Contact from './Contact'
import Orders from './Orders'
import About from './About'
import RestaurantPage from './RestaurantPage';
import DishesPage from './DishesPage';
import { UserContext } from './CreateContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [restaurantId, setRestaurantId] = useState(null)
  return (
    <div className="app">  
      <Router>
        <UserContext.Provider value={{ restaurantId, setRestaurantId }}>
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
            </UserContext.Provider>
        </Router>
    </div>
)};

export default App;
