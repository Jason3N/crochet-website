import React from 'react'
import './Products.css';
import { Link } from 'react-router-dom';
import starCatBeanieImage from '../product_images/starbeanie.JPG'

const ProductItems = [
    {
        id: 1,
        name: "star cat beanie",
        image: starCatBeanieImage,
        price: "$35"
    },
    {
        id: 2,
        name: "fingerless gloves",
        image: starCatBeanieImage,
        price: "$18"
    },
];


const Products = () => {
    return (
        <div className="productgrid">
            {ProductItems.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </Link>
            ))}
        </div>
    );
}


export default Products;