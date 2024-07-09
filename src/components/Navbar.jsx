import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../logo/intract_text.svg';
import Popup from './Popup'; 

const Navbar = () => {
    const [isCompassHovered, setIsCompassHovered] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="intract logo" />
            </div>
            <ul className="navbar-nav">
                <li 
                    className="nav-item"
                    onMouseEnter={() => setIsCompassHovered(true)}
                    onMouseLeave={() => setIsCompassHovered(false)}
                >
                    <Link to="/compass">Compass</Link>
                    <Popup isOpen={isCompassHovered} />
                </li>
                <li className="nav-item"><Link to="/explore">Explore</Link></li>
                <li className="nav-item"><Link to="/">Academy</Link></li>
                <li className="nav-item"><Link to="/nfts">NFTs</Link></li>
                <li className="nav-item"><Link to="/for-projects">For Projects</Link></li>
            </ul>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
