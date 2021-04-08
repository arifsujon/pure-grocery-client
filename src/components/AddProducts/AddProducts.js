import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        // console.log(productData)

        const url = 'http:https://arcane-forest-38769.herokuapp.com/addProduct';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then( res => console.log('server side response', res))

    };
    
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '567ed280f2234c502b55f6ed8195bb1f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
        setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div className="col-md-10 text-center add-products">
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-5 p-2 rounded" placeholder="Product Name" {...register("name")} /><br/>
                <input className="mt-3 p-2 rounded" placeholder="Price" {...register("price")} /><br/>
                <input className="mt-3 p-2 rounded" placeholder="Weight" {...register("weight")} /><br/>
                <input className="mt-3" type="file" onChange={handleImageUpload}/> <br/>
                <input className="mt-3 p-2 rounded" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;