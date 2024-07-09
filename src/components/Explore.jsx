import React from 'react';
import Footer from './Footer';
import './Explore.css'; // Make sure to create and use an appropriate CSS file
import searchIcon from '../logo/search-interface-symbol.png'; // Ensure the path is correct

const Explore = () => {
  return (
    <>
    <div className='explore'>Explore</div>
      <div className="explore-container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." aria-label="Search" style={{ backgroundImage: `url(${searchIcon})` }} />
          
        </div>
        <div className="category-buttons">
          <button>Quests (695)</button>
          <button>NFTs (116)</button>
          <button>Communities (671)</button>
          <button>Events (31)</button>
          <button>External Quests (12855)</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
