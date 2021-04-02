import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, imageURL, price, _id } = props.product;
    let history = useHistory();

    const handleClick = (id) => {
        const url = `/checkOut/${id}`;
        history.push(url);
    }

    return (
        <div className="product-container">
            <img src={imageURL} alt=""/>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <Link onClick={() => handleClick(_id)} to={`/checkOut/${_id}`}><button className="search-btn">Buy Now</button></Link>
        </div>
    );
};

export default Product;