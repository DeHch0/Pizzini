import React, {useState , useEffect} from 'react';
import ProductCard from '../ProductCard';
import Requester from '../../Requester/'
import { Link } from 'react-router-dom';

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
            <div className="left-menu">
                <ul className= 'menu-items'>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                    <li className='item-type'><Link to=''>Пици</Link></li>
                </ul>
            </div>
            <div id="section-grid">
                {params ? params.map(elm => <ProductCard params={elm} /> ) : <p className='no-products'>No Products !</p> }
            </div>
        </main>
    )
 }