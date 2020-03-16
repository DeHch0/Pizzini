import React from 'react';

import '../ProductList/style.css';

import {Link} from 'react-router-dom';

const ProductCard = (para) => {
    let params = para.params;
    
    return (
        <Link id="product-card" to={"product/view/" + params._id}>
            <div id="product-img">
                <img src={params.imageUrl} alt=""/>
            </div>
            <div id="product-name">{params.name}</div>
            <div id="product-desc">{params.description}</div>
            <button>Add to Cart</button>
            </Link>
    )
}

export default ProductCard