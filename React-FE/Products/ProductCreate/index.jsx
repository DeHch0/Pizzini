import React , { useState } from 'react';
import Requester from '../../Requester'

const ProductCreate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0)
    const [imageUrl, setImageUrl] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()

        let data = {
            name: name,
            price: price,
            description: description,
            imageUrl: imageUrl
        }

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
            default: {return ('');}
        }
    }

    return (
        <main>
        <div class="wrapper">


            <div class="login-form">

                <h2>Login</h2>
                <form onSubmit={handleLogin}>

                    <div class="name">
                        <label for="name"><img src="https://img.icons8.com/windows/96/000000/user.png" alt='Error dur img loading...' /></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name..."
                            value={name}
                            onChange={handleOnChange} />
                    </div>

                    <div class="description">
                        <label for="description"><img src="https://img.icons8.com/material-rounded/96/000000/lock.png" alt='Error dur img loading...'/></label>
                        <input
                            type="description"
                            name="description"
                            id="description"
                            placeholder="description..."
                            onChange={handleOnChange}
                            value={description}
                        />
                    </div>

                    <div class="imageUrl">
                        <label for="imageUrl"><img src="https://img.icons8.com/material-rounded/96/000000/lock.png" alt='Error dur img loading...'/></label>
                        <input
                            type="imageUrl"
                            name="imageUrl"
                            id="imageUrl"
                            placeholder="imageUrl..."
                            onChange={handleOnChange}
                            value={imageUrl}
                        />
                    </div>

                    <div class="price">
                        <label for="price"><img src="https://img.icons8.com/material-rounded/96/000000/lock.png" alt='Error dur img loading...'/></label>
                        <input
                            type="price"
                            name="price"
                            id="price"
                            placeholder="price..."
                            onChange={handleOnChange}
                            value={price}
                        />
                    </div>

                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>

    </main>



    )
}

export default ProductCreate;