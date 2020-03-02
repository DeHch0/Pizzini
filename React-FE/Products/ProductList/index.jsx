import React, {useState} from 'react';
import ProductCard from '../ProductCard';
import Requester from '../../Requester/'
import './style.css'

export default () => {

        const [params, setParams] = useState('');

        Requester('products')
        .then(data => data.json())
        .then(data => setParams(data))
        .catch(err => console.log(err));
    return (
        <main>
            <div id="section-grid">
                {params ? params.map(elm => <ProductCard params={elm} /> ) : <p>No Products !</p> }
            </div>
        </main>
    )
 }