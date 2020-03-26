import React from 'react';
import Template from './Template';


const BucketView = (bucket) => {

    const products = Object.keys(sessionStorage);

    return (
        <table>
            <thead>
                <th>Име</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Премахни</th>
            </thead>
            {products.map(id => <Template params={id} />)}
        </table>
    )
}

export default BucketView;