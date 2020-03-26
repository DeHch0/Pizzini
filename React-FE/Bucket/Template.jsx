import React from 'react';

export default ({params}) => {

    params = JSON.parse(sessionStorage.getItem(params));

    const removeItem = (event) => {
        let id = event.target.id;
        sessionStorage.removeItem(id);
    }
    
    return (
        <tr>
            <td>{params.name}</td>
            <td>{params.quantity}</td>
            <td>{params.price}</td>
            <td onClick={removeItem} id={params.id}>Remove</td>
        </tr>
    )
}