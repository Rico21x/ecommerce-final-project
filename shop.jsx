import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css';

export const Shop = () => {
    return (
        <div className ="shop">
            <div className="shopTitle"> 
            <div>
                <h2> Rico's Steak N Fries </h2>
                </div>

                <div className="products"> 
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}

                </div>
            </div>
        </div>
    )
}