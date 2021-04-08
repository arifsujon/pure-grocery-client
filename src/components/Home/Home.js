import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            {
                products.length === 0 && <Loader
                className="text-center"
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                />
            }
            
            <div className="row">
                {
                    products.map(product => <Products product={product} key={product._id} ></Products> )
                }
            </div>
        </div>
    );
};

export default Home;