import React from 'react';
import './Cart.css';
import card from '../logo/card.svg';

const Cart = () => {
  return (
    <>
    <hr></hr>
      <div className="cart">
        <div className="cart-title">Crypto Dictionary</div>
        <div className="cart-subtitle">Your one-stop to catch up on all crypto terms</div>
        <div className="cart-image">
          <img src={card} alt="Card illustration" />
        </div>
      </div>
      <div className='button'>
        <button>Essentials</button>
        <button>Alpha Hub</button>
      </div>
      <hr></hr>
    </>
  );
}

export default Cart;
