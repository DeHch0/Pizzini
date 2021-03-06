import React from 'react';

import '../ProductList/style.css';

import {Link} from 'react-router-dom';

const ProductCard = (para) => {
    let params = para.params;
    
    let description = params.description.substring(0 , 90) + '....';

    return (
        <Link id="product-card" to={"product/view/" + params._id}>
            <div  id="product-img">
                <img src={params.imageUrl} alt=""/>
            </div>
            <div id="product-name">{params.name}</div>
            <div id="product-desc">{description}</div>
            <div id="product-desc">Цена: {params.price} лв.</div>
            <button className="order-product">Поръчай</button>
            </Link>
    )
}

export default ProductCard