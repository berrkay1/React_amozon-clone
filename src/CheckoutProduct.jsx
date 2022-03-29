import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateContext';

function CheckoutProduct({id,image,title,price,rating}) {

  const [{basket},dispath] = useStateValue();

  const removeFromBasket = () => {
    dispath({
      type: "REMOVE_FROM_BASKET",
      id:id,
    })
  }

  return (
    <div className="checkoutProduct">
        <img src={image} alt="" className='checkout-image' />
        <div className="checkout-info">
            <p className='title'>
            {title}
            </p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="raiting">
            {Array(rating)
            .fill()
            .map((_,i)=>(
              <p>⭐</p>
            ))
            }
            </div>
            <button onClick={removeFromBasket} >Remove from Basket</button>
        </div>

        
    </div>
  )
}

export default CheckoutProduct