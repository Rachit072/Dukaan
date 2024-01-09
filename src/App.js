import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Payments from './components/Payments/Payments';
import Orders from './components/Order/Order';
import Products from './components/Products/Products';
import Marketing from './components/Marketing/Marketing';
import Delivery from './components/Delivery/Delivery';
import Analytics from './components/Analytics/Analytics';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payments" element={<Payments/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/marketing" element={<Marketing/>} />
            <Route path="/delivery" element={<Delivery/>} />
            <Route path="/analytics" element={<Analytics/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
