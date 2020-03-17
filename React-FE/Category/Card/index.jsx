import React, {useState, useEffect} from 'react';
import '../Read/style.css';
import { Link } from "react-router-dom";

const CategoryCard = (params) => {

    const [element, setElement] = useState('');

    useEffect(() => { 
        setElement(params.params)
    }, [])

    return(
        <tr>
            <td>{element.name}</td>
            <td><Link to={'/category/edit/' + element._id}>Edit</Link></td>
            <td><Link to={'/category/delete/' + element._id}>Delete</Link></td>
        </tr>
    
    
    )
}

export default CategoryCard;