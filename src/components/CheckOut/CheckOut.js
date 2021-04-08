import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const {productId} = useParams();
    console.log(productId);
    const [products, setProducts] = useState([]);
    console.log(products);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect( () => {
        const url = `http://localhost:5055/products`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data.find(product => product._id === productId))
        })
    }, [productId])

    

    const handleCheckOut = () => {
        const newOrder = {...products, ...loggedInUser};
        // console.log(newOrder);
        fetch('http://localhost:5055/addOrder', {
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
            <ul>
                <li>Description: {products.name}</li>
                <li>Description: 1</li>
                <li>Price: {products.price}</li>
            </ul>
            <Button onClick={handleCheckOut} className="" variant="success">Check Out</Button>
        </div>
    );
};

export default CheckOut;