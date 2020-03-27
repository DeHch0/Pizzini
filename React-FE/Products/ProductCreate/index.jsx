import React , { useState, useEffect } from 'react';
import Requester from '../../Requester'
import cookie from 'react-cookies';
import './style.css';

const ProductCreate = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    
    const [categories, setCategories] = useState('');

    const handleLogin = (event) => {
        event.preventDefault()
        let creator = cookie.select(/\busername?\b/g);
        console.log(creator);
        let data = {
            name: name,
            price: price,
            description: description,
            imageUrl: imageUrl,
            createdBy: creator,
            category
        }
        console.log(data);
        Requester('products' , 'POST' , data)
        .then(data => {console.log(data)})
        .then(err => {console.log(err)})
    }

    const handleOnChange = ({ target }) => {
        switch(target.id) {
            case 'name': {setName(target.value); break ;}
            case 'description': {setDescription(target.value); break ;}
            case 'imageUrl': {setImageUrl(target.value); break ;}
            case 'price': {setPrice(target.value); break ;}
            case 'category': {setCategory(target.value); break ;}
            default: {return ('');}
        }
    }

    useEffect(() => {
        Requester('category')
            .then(data => data.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <main>
            <div class="create-product">

                <h2>Create Product</h2>
                <form onSubmit={handleLogin}>

                    <div class="input-field">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name..."
                            value={name}
                            onChange={handleOnChange} />
                    </div>

                    <div class="input-field">
                        <label for="description">Description</label>
                        <input
                            type="description"
                            name="description"
                            id="description"
                            placeholder="description..."
                            onChange={handleOnChange}
                            value={description}
                        />
                    </div>

                    <div class="input-field">
                        <label for="imageUrl">Image URL</label>
                        <input
                            type="imageUrl"
                            name="imageUrl"
                            id="imageUrl"
                            placeholder="imageUrl..."
                            onChange={handleOnChange}
                            value={imageUrl}
                        />
                    </div>

                    <div class="input-field">
                        <label for="price">Price</label>
                        <input
                            type="price"
                            name="price"
                            id="price"
                            placeholder="price..."
                            onChange={handleOnChange}
                            value={price}
                        />
                    </div>
                    <div class="input-field">
                    <label htmlFor="category">Category: </label>
              {categories ?
              <select name="category" onChange={handleOnChange} required id="category">
              <option selected='selected' value='' ></option>
                  {categories.map(category => {
                 return  <option  value={category._id}>{category.name}</option>
                  })}
                  
              </select>
              : null }
              </div>
              <br />



                    <button className="login-button" type="submit">Create</button>
                </form>
            </div>
    </main>



    )
}

export default ProductCreate;