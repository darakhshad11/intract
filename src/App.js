import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './components/Explore'; 
import Footer from './components/Footer';
import Home from './components/Home'; 


const App = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          
        </Router>
    );
};

export default App;
