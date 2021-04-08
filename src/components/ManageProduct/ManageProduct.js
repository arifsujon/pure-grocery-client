import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDelete = (id)=>{
        fetch(`http://localhost:5055/deleteProduct/${id}`, {
                method: 'DELETE'
            })
            .then(result => {
                console.log("deleted successfully", result);
            })
    }

    return (
        <div className="col-md-10">
            <h1>This is manage product</h1>
            {
                products.map(product => <li>{product.name} <button onClick={() => handleDelete(product._id)}>Delete</button></li>)
            }
        </div>
    );
};

export default ManageProduct;