import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({product}) => {
    // console.log(product);
    const {imageURL, name, price, _id} = product;
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img className="card-img-top p-4" style={{height: '300px'}} src={imageURL} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4 className="d-inline-block card-text">${price}</h4>
                    <Button className="buy-btn d-inline-block" as={Link} to={'/product/'+_id} variant="success">Buy Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Products;