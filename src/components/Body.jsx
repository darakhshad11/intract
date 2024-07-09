import React from 'react'
import './Body.css';

import academy from '../logo/academy-animated-logo-57b2ae61.gif';
const Body = () => {
  return (
    <>
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
    </>
  )
}

export default Body