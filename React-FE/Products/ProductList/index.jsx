import React, {useState , useEffect} from 'react';
import ProductCard from '../ProductCard';
import Requester from '../../Requester/'
import './style.css'

export default () => {

        const [params, setParams] = useState('');

        useEffect(() => {
        Requester()
        .then(data => data.json())
        .then(data => setParams(data))
        .catch(err => console.log(err));
        } , [])

        console.log(params);
    return (
        <main>
            <div id="section-grid">
                {params ? params.map(elm => <ProductCard params={elm} /> ) : <p className='no-products'>No Products !</p> }
            </div>
        </main>
    )
 }