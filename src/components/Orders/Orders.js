import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const orderList = orders.filter(order => order.email === loggedInUser.email)

    return (
        <div className="style">
            <h3>Email: {loggedInUser.email}</h3>
            <table>
                <tr id="customers">
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Date & Time</th>
                </tr>
            
            {
                orderList.map(od => 
                    <tr>
                        <td>{od.product.name}</td>
                        <td>${od.product.price}</td>
                        <td>{od.orderTime}</td>
                    </tr>

                )
            }
            </table>
        </div>
    );
};

export default Orders;