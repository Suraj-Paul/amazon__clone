import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import Axios from 'axios';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        // Generate a special stripe  secret which allow us to change a custumer
        const getClientSecret = async () => {
            const response = await Axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();  
    },[basket])

    const handleSubmit = async(event) => {
        //stripe stuffs goes here...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment Intent = Payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace("/orders")
        })
        
    }
    const handleChange = event => {
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error?event.error.message:"")     
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(<Link to = "/checkout">{basket?.length}items</Link>)
                 
                </h1>
                {/* payment sections- delivery adderess */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>

                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>At + Post : This is address</p>
                        <p>Dist : Demo, 82XX10</p>
                    </div>

                </div>
                {/* payment sections- review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}     
                                />
                            ))
                        }
                    </div>
                </div>
                {/* payment sections- payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe will go here */}
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparater={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}            
                        </form>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Payment;
