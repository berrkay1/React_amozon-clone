import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout-left">
            <h2 className='check-title'>Your Shopping Basket</h2>
            <CheckoutProduct/>
            <CheckoutProduct/>
        </div>

        <div className="checkout-right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout