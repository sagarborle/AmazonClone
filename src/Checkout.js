import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
        
                <div >
                    <h2 className="checkout_title">Your Shopping Cart</h2>
                    
                     {/* <CheckoutProduct
                        id='4531315'
                        title='This is the test, lorem ipsum lorem ipsumlorem ipsum
                        lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400_.jpg"
                        price={265.33}
                        rating={4}
                        /> */}

                    
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                       />

                    ))}
                    {/* CheckoutProduct */}
                                   
                    {/* CheckoutProduct */}
                                   
                    {/* CheckoutProduct */}
                                   


                            
                </div>
            
            </div>

               
            <div className="checkout_right">
                <Subtotal/> 
                <h2>The subtotal</h2>
            </div>

            
        </div>
    )
}

export default Checkout
