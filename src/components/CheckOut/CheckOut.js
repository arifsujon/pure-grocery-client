import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';

const CheckOut = () => {
    const {productId} = useParams();
    console.log(productId);
    const [products, setProducts] = useState([]);
    console.log(products);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect( () => {
        const url = `https://arcane-forest-38769.herokuapp.com/products`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data.find(product => product._id === productId))
        })
    }, [productId])

    

    const handleCheckOut = () => {
        const newOrder = {...products, ...loggedInUser};
        // console.log(newOrder);
        fetch('https://arcane-forest-38769.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res=> res.json())
        .then( data => {
            console.log('data from database', data)
        })
    }

    return (
        <div>
            <h1>Check Out</h1>
            {/* <ul>
                <li>Product Name: {products.name}</li>
                <li>Quantity: 1</li>
                <li>Price: {products.price}</li>
            </ul> */}
            <table className="table">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                
                    <tr>
                        <td>{products.name}</td>
                        <td>1</td>
                        <td>{products.price}</td>
                    </tr>
                </tbody>
            </table>

            <Button onClick={handleCheckOut} className="check-btn" variant="success">Check Out</Button>
        </div>
    );
};

export default CheckOut;