import React from 'react';
import './Navbar.css';
import logo from '../logo/intract_text.svg';
import academy from '../logo/academy-animated-logo-57b2ae61.gif';
import Footer from './Footer';
import Cart from './Cart';


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={logo} alt="intract logo" />
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#">Compass</a></li>
                    <li className="nav-item"><a href="#">Explore</a></li>
                    <li className="nav-item"><a href="#">Academy</a></li>
                    <li className="nav-item"><a href="#">NFTs</a></li>
                    <li className="nav-item"><a href="#">For Projects</a></li>
                    <div className="search-container">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">Sign in</button>
                    </div>
                </ul>
            </nav>
            <div className="main-content">
                <div className='academy-gif'>
                    <img src={academy} alt="academy logo" />
                </div>
                <p className="intro-text">
                    intract users have together made more than $100 million in web3.<br />
                    Join them and learn how to earn crypto!
                </p>
                <button>Get Started</button>
            </div>
           <Cart/>
            <Footer/>
        </>
    );
};

export default Navbar;
