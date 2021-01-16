import React from 'react';
import './SubTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subTotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items):<stong>{value}</stong></p>
                        <small className="subTotal__gift">
                            <input type = "checkbox"/>This contain a Gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparater={true}
                prefix={"₹"}
            />
            <button onClick = {e => history.push('/payment')}>Proceed to Checkout</button>     
        </div>
    )
}

export default SubTotal;
