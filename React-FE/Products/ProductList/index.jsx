import React from 'react';
import ProductCard from '../ProductCard';
import './style.css'

export default (params) => {

    return (
        <main>
            <div id="section-grid">
                {params.params ? params.params.map(elm => <ProductCard params={elm} /> ) : <p>No Products !</p> }
            </div>
        </main>
    )
 }