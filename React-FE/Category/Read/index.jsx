import React , { useState, useEffect } from 'react';
import Requester from '../../Requester'
import CategoryCard from '../Card';
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
            <table>
                <tr>
                    <th>Name</th>
                    {/* <th>Contact</th>
                    <th>Country</th> */}
                </tr>
            {params ? params.map(elm => <CategoryCard params={elm} />) : <p>No Categories Found !</p>}
        </table>
    )
}


export default ReadCategories