import React from 'react';
import { useStateValue } from '../context/StateProvider';
import "./Product.css";

function Product({id, description, image, rating, price }) {

    const [{ basket }, dispatch] = useStateValue();
    console.log('====================================');
    console.log(basket);
    console.log('====================================');
    
    const addToBasket = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                description,
                image,
                rating,
                price
            }
        })
    }
  return (
    
      <div className='product'>
        <div className='product__details'>
              <span className='product__description'>{description}</span>
              <strong className='product__price'>₹ { price }</strong>
              <div className='product__rating'>
                  {Array(rating).fill().map(() => {
                      return <p>⭐</p>;
                  })}
              </div>
          </div>
          <img className="product__image" src={image} alt="product__image" />
          <button onClick={addToBasket} className='product__button'>Add to Basket</button>
    </div>
  )
}

export default Product;
