import React , { useState, useEffect } from 'react';
import Requester from '../../Requester'
import CategoryCard from '../Card';
import { Link } from 'react-router-dom';
import './style.css'
const ReadCategories = () => {

    const [params, setParams] = useState('');

    useEffect(() => {
        Requester('category')
        .then(data => data.json())
        .then(data => setParams(data))
    }, [])

    console.log(params);

    return (
        <div className="container">
            
            <Link  to='category/create'><button className='button-category'>Create Category</button></Link>
                <table>
                    <tr>
                        <th>Category Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {params ? params.map(elm => <CategoryCard params={elm} />) : <p>No Categories Found !</p>}
                </table>
        </div>
    )
}


export default ReadCategories