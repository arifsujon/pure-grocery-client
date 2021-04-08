import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(() => {
        fetch('https://arcane-forest-38769.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleDelete = (id)=>{
        fetch(`https://arcane-forest-38769.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
            .then(result => {
                console.log("deleted successfully", result);
            })
    }

    return (
        <div className="col-md-10">
            <h3 className="mt-5 mb-5">Manage Product</h3>
            {
                products.map(product => <li>{product.name} <button  className="ml-5 mb-3" onClick={() => handleDelete(product._id)}><span className="">Delete</span></button></li>)
            }
        </div>
    );
};

export default ManageProduct;