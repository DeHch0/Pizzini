import React, { useEffect, useState } from 'react';
import Requester from '../../Requester'
import cookie from 'react-cookies';
import { Link } from "react-router-dom";
import './style.css';
const ProductDetails = (bucket) => {
    let id = document.URL.substr(document.URL.lastIndexOf('/') + 1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [pricePerOne, setPricePerOne] = useState(0);

    const orderSubmit = (event) => {
        event.preventDefault();
        let username = cookie.load('username');

        let data = {
            id,
            name,
            quantity,
            price,
            username,
            status: 'pending'
        }


            sessionStorage.setItem(id, JSON.stringify(data))
            bucket.bucket();
        

        console.log(data);
    }

    const orderQuantityOption = () => {
        let arr = [];
        for(let i = 1; i <= 10 ; i++) {
            
            arr[i-1] = <option value={i}>{i}</option>;
        }
        return arr;
    }

    const changePrice = (event) => {
        setQuantity(+event.target.value);
        setPrice(+event.target.value * pricePerOne)
    }

    const removeProduct = (event) => {
        Requester(`products/${id}`, 'DELETE')
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        Requester(`products/${id}`, 'GET')
            .then(data => data.json())
            .then(data => {
                setName(data.name)
                setDescription(data.description);
                setImageUrl(data.imageUrl);
                setPrice(data.price);
                setPricePerOne(data.price);
            });
    }, [id])
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

                <form onSubmit={orderSubmit} className="form-order">

                    <select onChange={changePrice} id="quantity">
                        {orderQuantityOption()}
                    </select>

                    <div className="product-price">
                        Цена: {price}лв.
                    </div>

                    <button type="submit" className="btn-order">Поръчай</button>
                </form>

                <hr/>
            </div>
        {   bucket.isAdmin
             ?
            <div className="admin-buttons">
                <Link to={'/product/edit/' + id}><button>Edit</button></Link>
                <button onClick={removeProduct}>Delete</button>
            </div>
            : 
            null
        }
        </div>

    )
}

export default ProductDetails