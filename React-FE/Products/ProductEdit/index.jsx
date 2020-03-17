import React, {useState , useEffect} from 'react';
import Requester from '../../Requester';

const Edit = () => {

    const [name , setName] = useState('');
    const [description , setDescription] = useState('');
    const [imageUrl , setImageUrl] = useState('');
    const [price , setPrice] = useState('');
    const [category, setCategory] = useState('');

    const [ categories, setCategories ] = useState('');

    let id = document.URL.substr(document.URL.lastIndexOf('/') + 1);

    useEffect(() => {
        Requester(`products/${id}`, 'GET')
        .then(data => data.json())
        .then(data=> {
            setName(data.name);
            setDescription(data.description);
            setImageUrl(data.imageUrl);
            setPrice(data.price);
        })

        Requester('category')
        .then(data => data.json())
        .then(data => setCategories(data));

    }, [])

    const handleLogin = (event) => {
        event.preventDefault()

        const data = {
            id,
            name,
            description,
            imageUrl,
            price: +price,
            category
        }

        Requester('products', 'PUT' , data)

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

    return (
    
        <main>
        <div class="wrapper">


            <div class="login-form">

                <h2>Edit</h2>
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

                    <label htmlFor="category">Category: </label>
              {categories ?
              <select name="category" onChange={handleOnChange} required id="category">
              <option selected='selected' value='' ></option>
                  {categories.map(category => {
                 return  <option  value={category._id}>{category.name}</option>
                  })}
                  
              </select>
              : null }
              <br />

                    <button className="login-button" type="submit">Edit</button>
                </form>
            </div>
        </div>

    </main>

    )
}

export default Edit