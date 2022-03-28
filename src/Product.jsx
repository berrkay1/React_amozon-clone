import React from 'react'
import './Product.css'

function Product({title,price,rating,image}) {
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
        <button>Add to Basket</button>
    </div>
  )
}

export default Product