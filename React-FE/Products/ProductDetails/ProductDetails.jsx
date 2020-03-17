import React, {useEffect, useState} from 'react';
import Requester from '../../Requester'
import {Link} from "react-router-dom";

const ProductDetails = () => {

    let id = document.URL.substr(document.URL.lastIndexOf('/') + 1);
    const [name , setName] = useState('');
    const [description , setDescription] = useState('');
    const [imageUrl , setImageUrl] = useState('');
    const [price , setPrice] = useState('');

    useEffect(() => {
        Requester(`products/${id}` , 'GET')
            .then(data => data.json())
            .then(data => {
                setName(data.name)
                setDescription(data.description);
                setImageUrl(data.imageUrl);
                setPrice(data.price);
            });
    } , [])
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{imageUrl}</p>
            <p>{price}</p>
            <button><Link to={'/product/edit/' + id}>Edit</Link></button>
            <button>Delete</button>
        </div>

    )
}

export default ProductDetails