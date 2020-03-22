import React, { useEffect, useState } from 'react';
import Requester from '../../Requester'
import { Link } from "react-router-dom";
import './style.css';
const ProductDetails = () => {

    let id = document.URL.substr(document.URL.lastIndexOf('/') + 1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const orderQuantityOption = () => {
        let arr = [];
        for(let i = 1; i <= 10 ; i++) {
            
            arr[i-1] = <option value={i}>{i}</option>;
        }
        return arr;
    }

    useEffect(() => {
        Requester(`products/${id}`, 'GET')
            .then(data => data.json())
            .then(data => {
                setName(data.name)
                setDescription(data.description);
                setImageUrl(data.imageUrl);
                setPrice(data.price);
            });
    }, [])
    return (
        <div className="product-view">
                {/* <button className="back"><Link to='/'>X</Link></button> */}
            <div className="left">
                <div className="product-img">
                    <img src={imageUrl} alt="" />
                </div>
            </div>
            
            <div className="right">
                <div className="product-name">{name}</div>
                <div className="product-description">{description}</div>
                
                    <hr/>

                <form className="form-order">

                    <select id="quantity">
                        {orderQuantityOption()}
                    </select>

                    <div className="product-price">
                        Цена: {price}лв.
                    </div>

                    <button className="btn-order">Поръчай</button>
                </form>

                <hr/>
            </div>
            {/* <div className="admin-buttons">
                <button><Link to={'/product/edit/' + id}>Edit</Link></button>
                <button><Link to={'/'}>Delete</Link></button>
            </div> */}

        </div>

    )
}

export default ProductDetails