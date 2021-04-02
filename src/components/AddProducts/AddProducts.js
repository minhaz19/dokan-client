import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL : imageURL
        }
        const url = 'https://serene-retreat-69880.herokuapp.com/addProduct';
        fetch(url,{
            method: "POST",
            headers :{
                'content-type': 'application/json'
            },
            body : JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key','0149e3d90d75ac177161fd7d24b8a46b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(res => setImageURL(res.data.data.display_url))
    }

    return (
        <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <p>Add Products:</p>
      <input name="name" placeholder="product name" ref={register} />
      <br/>
      <p>Price:</p>
      <input name="price" placeholder="product price" ref={register} /> 
      <br/>
      <br/>
        <input type="file" name="imageFile" onChange={handleImageUpload}/>
        <br/>
        <br/>
      <input className="submitButton" type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;