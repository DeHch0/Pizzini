import React from 'react';

import '../ProductList/style.css';

const ProductCard = (para) => {
    let params = para.params;
    return (
        <div id="product-card">
            <div id="product-img">
                <img src={params.imageUrl} alt=""/>
            </div>
            <div id="product-name">{params.name}</div>
            <div id="product-desc">{params.description}</div>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard