import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css'


const CheckOut = () => {
    let {id} = useParams();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const [productDetail, setProductDetail] = useState([]);
    useEffect(()=>{
        const url = `https://serene-retreat-69880.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProductDetail(data))
    },[id])

    const handleSubmit =() =>{
      const orderDetails = {...loggedInUser, product:productDetail, orderTime: new Date() }
      fetch('https://serene-retreat-69880.herokuapp.com/checkout',{
        method:"POST",
      headers:{
        'content-type': "application/json"
      },
      body:JSON.stringify(orderDetails)
      })
      .then(res =>res.json())
      .then(data =>{
        alert("Result placed Successfully");
      })
    
    }

    return (
        <div className="style">
        <table>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{productDetail.name}</td>
          <td>1</td>
          <td>{productDetail.price}</td>
          
        </tr>
        <tr>
          <td></td>
          <td>Total</td>
          <td>{productDetail.price}</td>
        </tr>
      </table>
      <button onClick={handleSubmit} className="search-btn checkoutButton">Checkout</button>
      </div>
    );
};

export default CheckOut;