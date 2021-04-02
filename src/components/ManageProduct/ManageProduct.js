import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [productDelete, setProductDelete] = useState([]);
    
    useEffect(() =>{
        fetch('https://serene-retreat-69880.herokuapp.com/products')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    const handleDelete = (id) =>{
        fetch(`https://serene-retreat-69880.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
           setProductDelete(data)
        })
    }
    return (
        <div className="style">
            <table>
                <tr id="customers">
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            
            {
                products.map(pd => 
                    <tr>
                        <td>{pd.name}</td>
                        <td>200gm</td>
                        <td>${pd.price}</td>
                        <td className="deleteIcon" onClick={() =>handleDelete(pd._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                    </tr>
                )
            }
            </table>
        </div>
    );
};

export default ManageProduct;