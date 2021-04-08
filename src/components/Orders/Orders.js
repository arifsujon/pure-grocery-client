import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5055/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        orders.map(order => {
            return (
                <div className="container">
                    <table className="table">
                        <thead>
                            <th>Product Name</th>
                            <th>Weight</th>
                            <th>Ordered By</th>
                            <th>Receiver Email</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.weight}</td>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }) 
    );
};


export default Orders;