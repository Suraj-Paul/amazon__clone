import React from 'react';
// import ReactNotification from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log('items in basket--->',basket)
    
    const addToBasket = () => {
        //dispatch the items into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className= "product">
            <div className= "product__info">
                <p>{title}</p>
                <p className= "product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className= "product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐️</p>
                    ))}    
                </div>
            </div>
            <img className= "AddToBasket" src= {image}/>
            <button onClick = {addToBasket}><a>Add to Basket</a></button>    
        </div> 
    )
}

export default Product;
