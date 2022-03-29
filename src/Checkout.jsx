import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css';
import {useStateValue} from './StateContext';

 
function Checkout() {

  const [{basket} , dispatch] =useStateValue();

  return (
    <div className="checkout">
        <div className="checkout-left">
            <h2 className='check-title'>Your Shopping Basket</h2>
            {basket.map(item =>(
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price ={item.price}
                rating={item.rating}
              />
            ))}
        </div>

        <div className="checkout-right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout