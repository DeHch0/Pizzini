import React , { useState } from 'react';
import Requester from '../../Requester';
import cookie from 'react-cookies';

const CategoryCreate = () => {
    const [name, setName] = useState('');
    const createdBy = cookie.load('username');

    const handleLogin = (event) => {
        event.preventDefault()

        let data = {
            name,
            createdBy
        }
        console.log(data);

        Requester('category' , 'POST' , data)
        .then(data => {console.log(data)})
        .then(err => {console.log(err)})
    }

    const handleOnChange = ({ target }) => {
        switch(target.id) {
            case 'name': {setName(target.value); break ;}
            default: {return ('');}
        }
    }

    return (
        <main>
        <div class="wrapper">
            <div class="login-form">

                <h2>Create Category</h2>
                <form onSubmit={handleLogin}>

                    <div class="input">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name..."
                            value={name}
                            onChange={handleOnChange} />
                    </div>

                  

                    <button className="login-button" type="submit">Create</button>
                </form>
            </div>
        </div>

    </main>



    )
}

export default CategoryCreate;