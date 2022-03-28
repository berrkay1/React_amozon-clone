import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className='checkout-image' />
        <div className="checkout-info">
            <p className='title'>
            Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
            </p>
            <p className="price">
                <small>$</small>
                <strong>30</strong>
            </p>
            <div className="raiting">
            ⭐⭐⭐
            </div>
            <button>Remove from Basket</button>
        </div>

        
    </div>
  )
}

export default CheckoutProduct