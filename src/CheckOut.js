import React from 'react';
import './CheckOut.css'
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function CheckOut() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/ScanExplorePay/TopBanner_New_Desktop.jpg" alt="" />
                <div className="checkoutproducts">
                    <h3>{user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket    
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}     
                    />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal/>
            </div>
        </div>
    )
}

export default CheckOut
