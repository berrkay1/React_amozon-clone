import React from 'react'
import './Product.css'
import {useStateValue} from './StateContext';

function Product({id,title,price,rating,image}) {

  const [state,dispatch] = useStateValue();

  const addToBasket = ()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item : {
        id:id,
        image:image,
        price:price,
        rating:rating
      },
    });
  };

  return (
    <div className="product">
        <div className="product-info">
            <p>{title}</p>
            <p className="price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="raiting">{rating}</div>
        </div>
        <img src={image} alt="" className='product-image' />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product