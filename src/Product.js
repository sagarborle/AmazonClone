import React from 'react';
import "./Product.css";
function Product() {
    return (
        <div className="product">
            <div className="product-info">
                <p>The lean startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>29.99</strong>
                </p>
                <div className="product_rating">
                    <p>🌟</p>
                </div>
            </div>
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400_.jpg"
                alt=""
            />
            <button>Add to cart</button>


            
        </div>
    )
}

export default Product
