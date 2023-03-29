import React, { useEffect, useState } from 'react';
import { addToDb } from '../../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => 
                    <Product key={product.id}
                    product = {product} 
                    handleAddToCart = {handleAddToCart}/>)
                }
            </div>
            <div className="cart-container">
                <Card cart = {cart}/>
            </div>

        </div>
    );
};

export default Shop;